from pydantic import BaseModel
from typing import Optional, List
from model.paciente import Paciente
import json
import numpy as np


class PacienteSchema(BaseModel):
    """Define como um novo paciente a ser inserido deve ser representado"""
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
                "age": paciente.age,
                "gender": paciente.gender,
                "chestpain": paciente.chestpain,
                "restingBP": paciente.restingBP,
                "serumcholestrol": paciente.serumcholestrol,
                "fastingbloodsugar": paciente.fastingbloodsugar,
                "restingrelectro": paciente.restingrelectro,
                "maxheartrate": paciente.maxheartrate,
                "exerciseangia": paciente.exerciseangia,
                "oldpeak": paciente.oldpeak,
                "slope": paciente.slope,
                "noofmajorvessels": paciente.noofmajorvessels,
                "target": paciente.target,
            }
        )

    return {"pacientes": result}
