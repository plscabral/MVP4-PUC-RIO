from pydantic import BaseModel
from typing import Optional, List
from model.paciente import Paciente

class PacienteSchema(BaseModel):
    """Define como um novo paciente a ser inserido deve ser representado"""
    name: str = "John"
    age: int = 25
    gender: int = 1
    chestpain: float = 0
    restingBP: float = 158
    serumcholestrol: float = 270
    fastingbloodsugar: float = 0
    restingrelectro: float = 0
    maxheartrate: float = 143
    exerciseangia: float = 1
    oldpeak: float = 4.7
    slope: float = 0
    noofmajorvessels: float = 0


class PacienteViewSchema(BaseModel):
    """Define como um paciente será retornado"""

    id: int = 1
    name: str = "John"
    age: int = 25
    gender: int = 1
    chestpain: float = 0
    restingBP: float = 158
    serumcholestrol: float = 270
    fastingbloodsugar: float = 0
    restingrelectro: float = 0
    maxheartrate: float = 143
    exerciseangia: float = 1
    oldpeak: float = 4.7
    slope: float = 0
    noofmajorvessels: float = 0
    target: Optional[int] = None


class PacienteBuscaSchema(BaseModel):
    """Define como deve ser a estrutura que representa a busca.
    Ela será feita com base no id do paciente.
    """

    id: int = 1


class ListaPacientesSchema(BaseModel):
    """Define como uma lista de pacientes será representada"""

    pacientes: List[PacienteSchema]


class PacienteDelSchema(BaseModel):
    """Define como um paciente para deleção será representado"""

    id: int = 1

# Apresenta uma lista de pacientes
def apresenta_pacientes(pacientes: List[Paciente]):
    """Retorna uma representação do paciente seguindo o schema definido em
    PacienteViewSchema.
    """
    result = []
    for paciente in pacientes:
        result.append(
            {
                "id": paciente.id,
                "name": paciente.name,
                "age": paciente.age,
                "gender": map("gender", paciente.gender),
                "chestpain": map("chestpain", paciente.chestpain),
                "restingBP": paciente.restingBP,
                "serumcholestrol": paciente.serumcholestrol,
                "fastingbloodsugar": map("fastingbloodsugar", paciente.fastingbloodsugar),
                "restingrelectro": map("restingrelectro", paciente.restingrelectro),
                "maxheartrate": paciente.maxheartrate,
                "exerciseangia": map("exerciseangia", paciente.exerciseangia),
                "oldpeak": paciente.oldpeak,
                "slope": map("slope", paciente.slope),
                "noofmajorvessels": paciente.noofmajorvessels,
                "target": map("target", paciente.target),
            }
        )

    return {"pacientes": result}

def map(field: str, value: float):
    if field == "gender":
        if value == 0: return "Female"
        else: return "Male"
    elif field == "chestpain":
        if value == 0: return "Typical angina"
        elif value == 1: return "Atypical angina"
        elif value == 2: return "Non-anginal pain"
        else: return "Asymptomatic"
    elif field == "restingrelectro":
        if value == 0: return "Normal"
        elif value == 1: return "ST-T wave abnormality"
        else: return "Probable or definite left ventricular hypertrophy"
    elif field == "fastingbloodsugar":
        if value == 0: return "No"
        else: return "Yes"
    elif field == "exerciseangia":
        if value == 0: return "No"
        else: return "Yes"
    elif field == "slope":
        if value == 1: return "Upsloping"
        elif value == 2: return "Flat"
        else: return "Downsloping"
    elif field == "target":
        if value == 0: return "Absence of Heart Disease"
        else: return "Presence of Heart Disease"