from sqlalchemy import Column, String, Integer, DateTime, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Union

from model import Base


# colunas = idade	rt_pcr	leucocitos	basofilos	creatinina	proteina_c	hemoglobina
class Paciente(Base):
    __tablename__ = "pacientes"

    # entrada
    id = Column(Integer, primary_key=True)
    age = Column("age", Integer)
    gender = Column("gender", Integer)
    chestpain = Column("chestpain", Float)
    restingBP = Column("restingBP", Float)
    serumcholestrol = Column("serumcholestrol", Float)
    fastingbloodsugar = Column("fastingbloodsugar", Float)
    restingrelectro = Column("restingrelectro", Float)
    maxheartrate = Column("maxheartrate", Float)
    exerciseangia = Column("exerciseangia", Float)
    oldpeak = Column("oldpeak", Float)
    slope = Column("slope", Float)
    noofmajorvessels = Column("noofmajorvessels", Float)
    # saida
    target = Column("target", Integer, nullable=True)
    created_at = Column(DateTime, default=datetime.now())

    def __init__(
        self,
        age: int,
        gender: int,
        chestpain: float,
        restingBP: float,
        serumcholestrol: float,
        fastingbloodsugar: float,
        restingrelectro: float,
        maxheartrate: float,
        exerciseangia: float,
        oldpeak: float,
        slope: float,
        noofmajorvessels: float,
        target: int,
        created_at: Union[DateTime, None] = None,
    ):
        """
        Cria um Paciente

        # Arguments:
        #     age: idade
        #     gender (int): genero
        #     chestpain (int): 
        #     restingBP (int): concentração de basofilos
        #     serumcholestrol (int): pressão creatinina
        #     fastingbloodsugar (int): espessura proteina_c
        #     restingrelectro (int): número de hemoglobina
        #     maxheartrate (int): número de hemoglobina
        #     exerciseangia (int): número de hemoglobina
        #     oldpeak (int): número de hemoglobina
        #     slope (int): número de hemoglobina
        #     noofmajorvessels (int): número de hemoglobina
        #     target (int): diagnóstico
        #     created_at: data de quando o paciente foi inserido à base
        # """
        self.age = age
        self.gender = gender
        self.chestpain = chestpain
        self.restingBP = restingBP
        self.serumcholestrol = serumcholestrol
        self.fastingbloodsugar = fastingbloodsugar
        self.restingrelectro = restingrelectro
        self.maxheartrate = maxheartrate
        self.exerciseangia = exerciseangia
        self.oldpeak = oldpeak
        self.slope = slope
        self.noofmajorvessels = noofmajorvessels
        self.target = target

        # se não for informada, será o data exata da inserção no banco
        if created_at:
            self.created_at = created_at
