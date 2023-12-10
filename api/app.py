from flask_openapi3 import OpenAPI, Info, Tag
from flask import redirect
from model import Session, Paciente, Model
from schemas import *
from flask_cors import CORS
import joblib

# Criando a instância do objeto OpenAPI.
info = Info(title="API de Predição", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)

# Estabelecendo tags para a categorização das rotas
home_tag = Tag(name="Documentação", description="")
paciente_tag = Tag(name="Paciente", description="")

# Endpoint principal
@app.get('/', tags=[home_tag])
def home():
    """Encaminha para a página /openapi, onde é possível selecionar o formato de documentação desejado.
    """
    return redirect('/openapi')

# Endpoint de listagem de pacientes
@app.get('/pacientes', tags=[paciente_tag],responses={"200": PacienteViewSchema, "404": ErrorSchema})
def get_pacientes():
    """ Recupera todos os pacientes registrados na base de dados."""
    session = Session()
    
    # Retorna todos os pacientes existentes na base
    pacientes = session.query(Paciente).all()
    
    if not pacientes:
        return {"pacientes": []}, 200
    else:
        return apresenta_pacientes(pacientes), 200

# Rota para adicionar pacientes e obter diagnósticos
@app.post('/paciente', tags=[paciente_tag], responses={"201": PacienteViewSchema, "400": ErrorSchema, "409": ErrorSchema})
def predict(form: PacienteSchema):
    """Inclui um novo paciente na base de dados."""
    
     # Carregando modelo
    ml_path = "ml_model/cardiovascular_knn.pkl"
    scaler_path = joblib.load("ml_model/scaler.joblib")
    modelo = Model.carrega_modelo(ml_path, scaler_path)
    
    paciente = Paciente(
        name=form.name,
        age=form.age,
        gender=form.gender,
        chestpain=form.chestpain,
        restingBP=form.restingBP,
        serumcholestrol=form.serumcholestrol,
        fastingbloodsugar=form.fastingbloodsugar,
        restingrelectro=form.restingrelectro,
        maxheartrate=form.maxheartrate,
        exerciseangia=form.exerciseangia,
        oldpeak=form.oldpeak,
        slope=form.slope,
        noofmajorvessels=form.noofmajorvessels,
        target=Model.preditor(modelo, form),
    )
    
    try:
        # Estabelecendo conexão com a base de dados.
        session = Session()
        session.add(paciente)
        session.commit()
        return { "message": "Paciente cadastrado com sucesso" }, 201
    
    # Em caso de erro durante a inclusão
    except Exception as e:
        error_msg = "Erro ao cadastrar paciente!"
        return {"message": error_msg}, 400
    
# Endpoint para deletar pacientes por nome
@app.delete('/paciente', tags=[paciente_tag],responses={"200": PacienteViewSchema, "404": ErrorSchema})
def delete_paciente(query: PacienteBuscaSchema):
    """Deleta paciente já existente por id"""
    
    paciente_id = query.id
    
    print(paciente_id)
    
    # Estabelecendo conexão com a base de dados
    session = Session()
    
    # Buscando paciente
    paciente = session.query(Paciente).filter(Paciente.id == paciente_id).first()
    
    if not paciente:
        error_msg = "Paciente inexistente."
        return {"message": error_msg}, 404
    else:
        session.delete(paciente)
        session.commit()
        return {"message": f"Sucesso! Paciente {paciente_id} deletado!"}, 200