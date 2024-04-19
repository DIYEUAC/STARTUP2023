document.addEventListener("DOMContentLoaded", function() {
    const students = [
        {
            "name": "LOAIZA GUTIERREZ, ESTHEFANI",
            "certificateURL": "https://drive.google.com/file/d/1HMapV9tlY1_-IDGHlZ95sFFTzRg8zHEw/view?usp=sharing",
            "password": "021100590k"
        },
        {
            "name": "SOLIS VALVERDE, DANIELA ALEJANDRA",
            "certificateURL": "https://drive.google.com/file/d/1PTJA1dH_TNTx55ThmephoE1xyTp2KNOK/view?usp=sharing",
            "password": "021100864c"
        },
        {
            "name": "VILLARRUEL VALDIVIA, JUAN CARLOS",
            "certificateURL": "https://drive.google.com/file/d/1XpBaK7aKO-HSG2ioR3IKjODSV_zWyqEA/view?usp=sharing",
            "password": "020201265i"
        },
        {
            "name": "RAMOS DIAZ, ALEJANDRO JOSUE",
            "certificateURL": "https://drive.google.com/file/d/1M7wZYC9PgLJS2XfPG4XZ4ZaHhx2Wae99/view?usp=sharing",
            "password": "023101249i"
        },
        {
            "name": "ESTRADA SEGUNDO, EVA VALERIA",
            "certificateURL": "https://drive.google.com/file/d/1C2tZbrBwthJlzPx0QLLhlHWLwujs-z2H/view?usp=sharing",
            "password": "023200302e"
        },
        {
            "name": "FARFAN LIZARASO, LUIS FABRICIO",
            "certificateURL": "https://drive.google.com/file/d/18jH_kkxm9Egf2SBpoz4eIq5ZVfsj0NN0/view?usp=sharing",
            "password": "023100455d"
        },
        {
            "name": "ANDRADE QUISPE, IONFRANKS",
            "certificateURL": "https://drive.google.com/file/d/1v222vp74lIl-wYxUppv8Px7m3SVSJA5k/view?usp=sharing",
            "password": "021101129e"
        },
        {
            "name": "ACHAHUANCO YANQUE, YANKER",
            "certificateURL": "https://drive.google.com/file/d/1EBAWTDPobs80YLY6W5pySic71nEZtMHO/view?usp=sharing",
            "password": "023101147a"
        },
        ,
        {
            "name": "WING MENDOZA, MILDRED",
            "certificateURL": "https://drive.google.com/file/d/19_3XJq82aA0udnSEksfIiV4ICqP8_R0r/view?usp=sharing",
            "password": ""
        },
        {
            "name": "TUMPAY ANCCASI, DAVID",
            "certificateURL": "https://drive.google.com/file/d/1EBAWTDPobs80YLY6W5pySic71nEZtMHO/view?usp=sharing",
            "password": ""
        },
        {
            "name": "MOSCOSO SALAS, ANDRE",
            "certificateURL": "https://drive.google.com/file/d/1DhodRRi6Wx9qJ_24shNLukHV783ZBtG7/view?usp=sharing",
            "password": "023101212h"
        },
        {
            "name": "CONDORI LAURA, MARIA INES",
            "certificateURL": "https://drive.google.com/file/d/13uhfI9oXg1KhAcAglEQGnI1adBTQuwtU/view?usp=sharing",
            "password": ""
        },
        {
            "name": "VENTURA FARFAN, MIREYA JETZUVELY",
            "certificateURL": "https://drive.google.com/file/d/14HGVXLgcXXPKc9bwOb-VRrzgVcKZmLJU/view?usp=sharing",
            "password": ""
        },
        {
            "name": "CONDORI CHUHUE, SOLEDAD",
            "certificateURL": "https://drive.google.com/file/d/1KK7DXarYjRNeYE6P5tyiWxOu-nddlujr/view?usp=sharing",
            "password": "020220039k"
        },
        {
            "name": "QUELLCA QUISPE, JUDITH",
            "certificateURL": "https://drive.google.com/file/d/1bYjesImsyqxbFZwyNKyqv_mSeIVajojf/view?usp=sharing",
            "password": ""
        },
        {
            "name": "SUMIRE COLQUE, PAUL RONALD",
            "certificateURL": "https://drive.google.com/file/d/1SVLeLWsTzHSDu8NY78XlOs4fjUlmcMXp/view?usp=sharing",
            "password": "020120194d"
        },
        {
            "name": "TIJERA HUARCA, SOELY",
            "certificateURL": "https://drive.google.com/file/d/1yley4733RBdzJQCR4OHBtLbapMVl0QQh/view?usp=sharing",
            "password": "020220135j"
        },
        {
            "name": "CHAMPI MAXI, FANI ELIZABETH",
            "certificateURL": "https://drive.google.com/file/d/1hJowzf8apiv5tHo0iKDFhq_Nw4S-Wn6E/view?usp=sharing",
            "password": "020220025j"
        },
        {
            "name": "ALIAGA CCORI, ROY MAKAY",
            "certificateURL": "https://drive.google.com/file/d/1CJMNEQB3BrWMT8gs6pvpxqDWc6--YdGt/view?usp=sharing",
            "password": "023100153h"
        },
        {
            "name": "APAZA PALOMINO, PAULO VICTOR",
            "certificateURL": "https://drive.google.com/file/d/1xKsN5gUrU1OdrlfFIEzWC2cUm__5drV7/view?usp=sharing",
            "password": "023101041i"
        },
        {
            "name": "ANTONIO MAMANI, WILBERT",
            "certificateURL": "https://drive.google.com/file/d/11ajID5GJy_PdAaZjR5z3XBNxMb_qWSpL/view?usp=sharing",
            "password": "023100620e"
        },
        {
            "name": "QUISPE DURAND, DIEGO EMILIO",
            "certificateURL": "https://drive.google.com/file/d/1fdQul2dzfa3eZSLOBIBKypbFt1zh5l7L/view?usp=sharing",
            "password": "023101528e"
        },
        {
            "name": "BRAÑEZ FRANCO, MARITZA LUCERO",
            "certificateURL": "https://drive.google.com/file/d/15TKQUeAdGBrd322L0Zga-XTyz87T5KZx/view?usp=sharing",
            "password": "021101148j"
        },
        {
            "name": "HUAYLLAPUMA CHALLCO, ASHLY MAYLU",
            "certificateURL": "https://drive.google.com/file/d/16cOPEICoh2mThpfxH-SJAAVad-ldZr3d/view?usp=sharing",
            "password": "021100540c"
        },
        {
            "name": "CONDORI, ANGELA",
            "certificateURL": "https://drive.google.com/file/d/14bCJEJrbMb2aT13UD0bFDB06_o8wFPIP/view?usp=sharing",
            "password": ""
        },
        {
            "name": "JURURO ORELLANA, ROY ERICK",
            "certificateURL": "https://drive.google.com/file/d/1GLHT_kTVBRxFDDiVYSmuG_SoDWW7tKR5/view?usp=sharing",
            "password": "020200424f"
        },
        {
            "name": "JANCCO JAIMES, ALEJANDRO MANUEL",
            "certificateURL": "https://drive.google.com/file/d/1wnn8z3-Ke8PTNPoJ1Az43kmE0izkLMe_/view?usp=sharing",
            "password": "020100254a"
        },
        {
            "name": "SULLCA CHUMBES, GROVER JOHAN",
            "certificateURL": "https://drive.google.com/file/d/1C3PrcMZEkHr8a0QHcyNNG_tZjjtTjSht/view?usp=sharing",
            "password": "019101079b"
        },
        {
            "name": "CORDOVA BENDEZU, JAZMIN PAOLA",
            "certificateURL": "https://drive.google.com/file/d/1AWiHFG6XgdfwG6aweF3f8Zn4pg6eZkmm/view?usp=sharing",
            "password": "021100356h"
        },
        {
            "name": "TORRES CABRERA, ROCIO FERNANDA",
            "certificateURL": "https://drive.google.com/file/d/1jMObsmW1X7JZhHnhlvd1KW6HkvwfrP7b/view?usp=sharing",
            "password": "021100893c"
        },
        {
            "name": "PACHECO HUAMANI, MADAI HASLY",
            "certificateURL": "https://drive.google.com/file/d/1j3Zn7PUzE3moPF3zHYpUJuJ76EK8Ajq9/view?usp=sharing",
            "password": "021101454c"
        },
        {
            "name": "CHOQUEHUANCA ARCONDO, WENDY JULISSA",
            "certificateURL": "https://drive.google.com/file/d/1QEPRLMtk3GD1Uy32uaCPOzQDC7wAqN_L/view?usp=sharing",
            "password": "021100320c"
        },
        {
            "name": "VARGAS GOMEZ, LUZ YAMILETH",
            "certificateURL": "https://drive.google.com/file/d/1iV6R_wty4pH3wFVmd5Tkqk9jGh3-lc55/view?usp=sharing",
            "password": "021100931b"
        },
        {
            "name": "ROMERO VILLASANTE, SOL ABIGAIL",
            "certificateURL": "https://drive.google.com/file/d/1ggyBZcKsEofU2lvrcruFypjdjTRJGdt9/view?usp=sharing",
            "password": "016101425k"
        },
        {
            "name": "GOMEZ HUAMAN, SHAKIRA",
            "certificateURL": "https://drive.google.com/file/d/1coTUd81PlILeINwDLxfTPCt4hOHTkvhD/view?usp=sharing",
            "password": "018100686c"
        },
        {
            "name": "CHILE POZO, ADRIANA ABIGAIL",
            "certificateURL": "https://drive.google.com/file/d/1QaqJF9zz9lSKlzI3-ndBvIwJjnx2OZ0A/view?usp=sharing",
            "password": "021101174k"
        },
        {
            "name": "ARAPA FLORES, STEVE BRAYAN",
            "certificateURL": "https://drive.google.com/file/d/1Mz-VHemvVenBuFGHwNXW33q1LyNsQaw8/view?usp=sharing",
            "password": "021100156i"
        },
        {
            "name": "VALLE VELIZ, KARLA VIVIANA",
            "certificateURL": "https://drive.google.com/file/d/1FIggPUWh9Kq_-9UvgOnszqnCeeQ1XX-9/view?usp=sharing",
            "password": "020201490b"
        },
        {
            "name": "ROMANI MORA, GIAN MARX RODRIGO",
            "certificateURL": "https://drive.google.com/file/d/1zFibwHWyraCkBtimwyRb4p_A6TGOC1uh/view?usp=sharing",
            "password": "021101323f"
        },
        {
            "name": "BORDA PEREZ, ALDAHIR ALEXANDER",
            "certificateURL": "https://drive.google.com/file/d/1vDxggkcw03lR6kv_tfIyq8AC3o9efhqF/view?usp=sharing",
            "password": "020200208a"
        },
        {
            "name": "LAYME SONCCO, BLANCA NELIDA",
            "certificateURL": "https://drive.google.com/file/d/1a3CeGwzsbOVr4aPCQ1yOqfi_07XY3Wg3/view?usp=sharing",
            "password": "021100576h"
        },
        {
            "name": "YAURI QUISPE, YEIFER",
            "certificateURL": "https://drive.google.com/file/d/1a3CeGwzsbOVr4aPCQ1yOqfi_07XY3Wg3/view?usp=sharing",
            "password": "020201278c"
        },
        {
            "name": "MEZA BAÑA, KATHERINE",
            "certificateURL": "https://drive.google.com/file/d/1VwPFt6dVT81FOsuP8UkbuS8f0g1bXf7J/view?usp=sharing",
            "password": ""
        },
        {
            "name": "ESPINOZA SALCEDO, JOSE ANTONIO",
            "certificateURL": "https://drive.google.com/file/d/1JfhlzIOil3jL2q55PlOq3ilSAsGIfG14/view?usp=sharing",
            "password": "021100411i"
        },
        {
            "name": "VALENZUELA ESCALANTE, ESTHER",
            "certificateURL": "https://drive.google.com/file/d/1xHg7Ngq3m3NRe6qFR7m_s4lENI-qacDn/view?usp=sharing",
            "password": "020102011i"
        },
        {
            "name": "QUISPE CHIPA, JEFFERSON SHAMER",
            "certificateURL": "https://drive.google.com/file/d/1MbNuEcMG8OJk4ixPkhDNud7BD0PdqSKC/view?usp=sharing",
            "password": "020200580h"
        },
        {
            "name": "CAVIEDES DURAN, MAYRA GABRIELA",
            "certificateURL": "https://drive.google.com/file/d/1vUIkcEqhJ21mitLHMMNy3MjU32e7-0cf/view?usp=sharing",
            "password": "021100273e"
        },
        {
            "name": "CARDEÑA HUILLCA, MILAGROS ALINA",
            "certificateURL": "https://drive.google.com/file/d/16xkTgpo5z0na6rg-90VE62KFrAC8Q1L_/view?usp=sharing",
            "password": "021101159a"
        },
        {
            "name": "HUAMAN FORTON, MARIA JESUS",
            "certificateURL": "https://drive.google.com/file/d/1oPMbkHkVVAjDBO2T1bmHuXFNAE3BJkEo/view?usp=sharing",
            "password": "021100511c"
        },
        {
            "name": "QUIÑONES DELGADO, ISRAEL FREDERI",
            "certificateURL": "https://drive.google.com/file/d/1tNvtzU_ZbQhzjBUIs4jma_l-XLR_jA9S/view?usp=sharing",
            "password": "017101513F"
        },
        {
            "name": "PACHECO GUZMAN, ESTHER",
            "certificateURL": "https://drive.google.com/file/d/1o9-b1yRcijnXBcQ8DLPdLND0J7Vc5SMt/view?usp=sharing",
            "password": "eguzman"
        },
        {
            "name": "CALDERON GONZALES, WERNER ALFONSO",
            "certificateURL": "https://drive.google.com/file/d/1PeOP4pqU9AjNwnbf4ay3afcyG4BKZQCF/view?usp=sharing",
            "password": "wcalderon"
        },
        { 
            "name": "CARLOTO GUTIERREZ, ED", 
            "certificateURL": "https://drive.google.com/file/d/1PeOP4pqU9AjNwnbf4ay3afcyG4BKZQCF/view?usp=sharing", 
            "password": "egutierrezc"
        },
        { 
            "name": "PONCE FERNANDEZ BACA, MANUEL ABRAHAM", 
            "certificateURL": "https://drive.google.com/file/d/1IJNPHvPZQ1erxwxxrRUL52fTYeh0uqxM/view?usp=sharing",
            "password": "mponcef"
        },
        {
            "name": "HOLGUIN HERRERA, MELISA BETYS", 
            "certificateURL": "https://drive.google.com/file/d/1akvI73Area_X3OJo22ZgovcJtr_vXhfY/view?usp=sharing",
            "password": "mholguin"
        },
        { 
            "name": "CANAHUIRE MONTUFAR, EDGARD ABRAHAM", 
            "certificateURL": "https://drive.google.com/file/d/1F3sYPMQE4UOSW_44I1xPNWtEQhz5zlJ3/view?usp=sharing",
            "password": "acanahuire"
        },
        {
             "name": "ASTETE CALDERON, GABRIELA", 
             "certificateURL": "https://drive.google.com/file/d/19swuNNzdHsJ_rYG4tAWPy_tnuHukdoQf/view?usp=sharing",
             "password": "gastete"
            }
    ];

    const studentsTableBody = document.getElementById("studentsTableBody");

    const openPdfWithPassword = (url, password) => {
        // Buscar el estudiante por contraseña
        const student = students.find(student => student.password === password);
        if (student) {
            // Abrir el PDF en una nueva ventana si la contraseña es correcta
            window.open(url, "_blank");
        } else {
            alert("Contraseña incorrecta");
        }
    };

    const renderStudents = (students) => {
        studentsTableBody.innerHTML = ""; // Limpiar tabla
        students.forEach((student, index) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = student.name;

            const downloadCell = document.createElement("td");
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Descargar";
            downloadButton.className = "btn btn-primary btn-center"; // Utilizamos nuestras clases personalizadas de CSS
            downloadButton.addEventListener("click", () => {
                // Mostrar modal para ingresar contraseña antes de descargar el PDF
                const passwordModal = new bootstrap.Modal(document.getElementById("passwordModal"));
                passwordModal.show();

                // Al hacer clic en "Aceptar", verificar la contraseña e iniciar la descarga si es correcta
                document.getElementById("submitPasswordBtn").addEventListener("click", () => {
                    const passwordInput = document.getElementById("passwordInput").value;
                    openPdfWithPassword(student.certificateURL, passwordInput);
                    passwordModal.hide();
                });
            });
            downloadCell.appendChild(downloadButton);

            row.appendChild(nameCell);
            row.appendChild(downloadCell);

            studentsTableBody.appendChild(row);
        });
    };

    // Filtrar estudiantes según el término de búsqueda
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchTerm));
        renderStudents(filteredStudents);
    });

    // Renderizar todos los estudiantes al cargar la página
    renderStudents(students);
});
