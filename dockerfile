FROM python:3.11

RUN pip install poetry

RUN pip install mysql

RUN pip install sqlalchemy

RUN pip install pydantic

RUN poetry config virtualenvs.create false

WORKDIR /workspace

COPY . .

RUN poetry install

CMD ["uvicorn", "database.main:api", "--reload", "--host", "0.0.0.0"]