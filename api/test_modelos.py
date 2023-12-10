from model.avaliador import Avaliador
from model.carregador import Carregador
from model.modelo import Model
import warnings

# Ignora todos os warnings durante a execução dos testes para facilitar a visibilidade do teste somente
warnings.simplefilter("ignore")

# Instanciação das Classes
carregador = Carregador()
modelo = Model()
avaliador = Avaliador()

# Parâmetros
url_dados = "dataset/Cardiovascular_Disease_Dataset.csv"
colunas = [
    "patientid",
    "age",
    "gender",
    "chestpain",
    "restingBP",
    "serumcholestrol",
    "fastingbloodsugar",
    "restingrelectro",
    "maxheartrate",
    "exerciseangia",
    "oldpeak",
    "slope",
    "noofmajorvessels"
]

# Carga dos dados
dataset = carregador.carregar_dados(url_dados, colunas)

# Remove as linhas com valores NaN
dataset = dataset.dropna()

# Separando em dados de entrada e saída
X = dataset.iloc[:, 0:-1]
Y = dataset.iloc[:, -1]
Y = Y.astype(int)

# Método para testar o modelo de Regressão Logística a partir do arquivo correspondente
def test_modelo_lr():
    # Importando o modelo de regressão logística
    lr_path = "ml_model/cardiovascular_lr.pkl"
    modelo_lr = Model.carrega_modelo(lr_path)

    # Obtendo as métricas da Regressão Logística
    acuracia_lr, recall_lr, precisao_lr, f1_lr = avaliador.avaliar(modelo_lr, X, Y)

    # Testando as métricas da Regressão Logística
    # Modifique as métricas de acordo com seus requisitos
    assert acuracia_lr >= 0.9
    assert recall_lr >= 0.9
    assert precisao_lr >= 0.9
    assert f1_lr >= 0.9


# Método para testar modelo KNN a partir do arquivo correspondente
def test_modelo_knn():
    # Importando modelo de KNN
    knn_path = "ml_model/cardiovascular_knn.pkl"
    modelo_knn = Model.carrega_modelo(knn_path)

    # Obtendo as métricas do KNN
    acuracia_knn, recall_knn, precisao_knn, f1_knn = avaliador.avaliar(modelo_knn, X, Y)

    # Testando as métricas do KNN
    # Modifique as métricas de acordo com seus requisitos
    assert acuracia_knn >= 0.5
    assert recall_knn >= 0.5
    assert precisao_knn >= 0.5
    assert f1_knn >= 0.5
