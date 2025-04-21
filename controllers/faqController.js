exports.faq = (req, res) => {
    const questions = [
        {
            question: "Quels sont les prérequis pour les cours ?",
            answer: "Nos cours débutants ne nécessitent aucun prérequis technique. Une simple motivation suffit !"
        },
        {
            question: "Comment puis-je m'inscrire aux cours ?",
            answer: "Vous pouvez vous inscrire directement sur notre site en remplissant le formulaire d'inscription."
        },
        {
            question: "Est-ce que les cours sont accessibles en ligne ?",
            answer: "Oui, tous nos cours sont disponibles en présentiel et en ligne via notre plateforme dédiée."
        },
        {
            question: "Y a-t-il un accompagnement personnalisé ?",
            answer: "Oui, chaque étudiant bénéficie d’un suivi individuel par un formateur référent."
        },
        {
            question: "Quels types de certifications proposez-vous ?",
            answer: "Nous délivrons des certifications reconnues par l'État et les entreprises partenaires."
        },
        {
            question: "Est-ce que les cours sont adaptés aux débutants ?",
            answer: "Absolument ! Nos parcours sont conçus pour guider chaque profil, même sans aucune expérience."
        }
    ];
    res.render("faq", { 
        pageTitle: "FAQ",
        questions: questions
    });
};
