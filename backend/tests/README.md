## The organization of the `mocks` directory

The `mocks` folder mirrors the root folder structure of the project, meaning that the mock for a file located in `./src/presentation/controller` will follow the same folder structure within the `mocks` folder. Like this:

**project/**
├── src/	# Código fonte do projeto
│   ├── presentation/     # Lógica de apresentação (controllers, services)
│   │   ├── controllers/  # Controladores da aplicação
│   │   │   ├── student-registration-controller.ts       # Controller de matrículas
├── tests/                # Testes do projeto
│   ├── mocks/            # Mocks para testes
│   │   ├── presentation/ # Mocks de presentation
│   │   │   ├── controllers/
│   │   │   │   ├── aluno-controller.mock.ts       # Mock do controller de matrículas
│   ├── README.md       # Documentação dos mocks