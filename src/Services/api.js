export async function buscarExercicios(grupo) {

    const resposta = await fetch("/exercises.json");
    const dados = await resposta.json();

    const grupos = {
        peito: ["peito"],
        costas: [
            "dorsais",
            "meio-das-costas",
            "inferior-das-costas"
        ],
        ombros: [
            "ombros",
            "trapezio"
        ],
        pescoco: [
            "pescoco"
        ],
        bracos: [
            "biceps",
            "triceps",
            "antebracos"
        ],
        pernas: [
            "quadriceps",
            "isquiotibiais",
            "gluteos",
            "panturrilhas",
            "abdutores",
            "adutores"
        ],
        abdomen: [
            "abdominais"
        ]
    };
    const musculos = grupos[grupo] || [grupo];

    const exercicios = dados.filter((exercicio) =>
        exercicio.primaryMuscles.some((musculo) =>
            musculos.includes(musculo)
        )
    );

    return exercicios;
}