const Course = require("../models/course");
// Fonction utilitaire pour extraire les paramètres du cours du corps de la requête
const getCourseParams = body => {
    return {
        title: body.title,
        description: body.description,
        maxStudents: body.maxStudents,
        cost: body.cost
    };
};
module.exports = {
    index: (req, res, next) => {
        Course.find({})
            .then(courses => {
                res.locals.courses = courses;
                next();
            })
            .catch(error => {
                console.log(`Erreur lors de la récupération des cours: ${error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("courses/index", { courses: res.locals.courses });
    }
,index: (req, res, next) => {
    Course.find({})
        .then(courses => {
            console.log("Courses récupérés :", courses);  // Ajoute ce log pour vérifier les données
            res.locals.courses = courses;
            next();
        })
        .catch(error => {
            console.log(`Erreur lors de la récupération des cours: ${error.message}`);
            next(error);
        });
},
     
    new: (req, res) => {
        res.render("courses/new");
    },
    create: (req, res, next) => {
        let courseParams = getCourseParams(req.body);
        Course.create(courseParams)
            .then(course => {
                res.redirect("/courses");  // Redirige directement vers /courses après la création
            })
            .catch(error => {
                console.log(`Erreur lors de la création du cours: ${error.message}`);
                res.redirect("/courses/new");  // Redirige vers la page de création en cas d'erreur
            });
    }
,    
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },
    show: (req, res, next) => {
        let courseId = req.params.id;
        Course.findById(courseId)
            .populate("students")
            .then(course => {
                res.locals.course = course;
                next();
            })
            .catch(error => {
                console.log(`Erreur lors de la récupération du cours par ID: ${error.message}`);
                next(error);
            });
    },
    showView: (req, res) => {
        res.render("courses/show");
    },
    edit: (req, res, next) => {
        let courseId = req.params.id;
        Course.findById(courseId)
            .then(course => {
                res.render("courses/edit", {
                    course: course
                });
            })
            .catch(error => {
                console.log(`Erreur lors de la récupération du cours par ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let courseId = req.params.id,
            courseParams = getCourseParams(req.body);
        Course.findByIdAndUpdate(courseId, {
            $set: courseParams
        })
            .then(course => {
                res.locals.redirect = `/courses/${courseId}`;
                res.locals.course = course;
                next();
            })
            .catch(error => {
                console.log(`Erreur lors de la mise à jour du cours par ID: ${error.message}`);
                next(error);
            });
    },
    delete: (req, res, next) => {
        let courseId = req.params.id;
        Course.findByIdAndRemove(courseId)
            .then(() => {
                res.locals.redirect = "/courses";
                next();
            })
            .catch(error => {
                console.log(`Erreur lors de la suppression du cours par ID: ${error.message}`);
                next();
            });
    }
};