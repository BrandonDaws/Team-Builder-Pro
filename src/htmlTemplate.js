const generatePortfolios = (receiveData) => {
        
    const empObj = receiveData.map(index => {
        if (index.officeNumber) {
            const {name, id, email, officeNumber} = index;
            return  `
            <div class="flex flex-col bg-slate-200 m-5 drop-shadow-lg rounded-b" id="profile">
                <div class="bg-blue-500 text-slate-100 text-xl text-center rounded-t" id="employee-information">
                    <div id="employee-name">${name}</div>
                    <div id="employee-title">Manager</div>
                </div>
                <div class="p-5 rounded-b" id="container">
                    <div id="employee-details">
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#"><p>ID Number:</p> ${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-phone"><p>Office Number: </p>${officeNumber}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email"><a href="mailto:${email}"><p>Email: </p>${email}</a></div>
                    </div>
                </div>
            </div>
        `
        }

        if (index.github) {
            const {name, id, email, github} = index;
            return  `
            <div class="flex flex-col bg-slate-200 m-5 drop-shadow-lg rounded-b" id="profile">
                <div class="bg-blue-500 text-slate-100 text-xl text-center rounded-t" id="employee-information">
                    <div id="employee-name">${name}</div>
                    <div id="employee-title">Engineer</div>
                </div>
                <div class="p-5 rounded-b" id="container">
                    <div id="employee-details">
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#"><p>ID Number:</p> ${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-github"><p>Github Username:</p> ${github}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-github"><a href="https://github.com/${github}" target="_blank">GitHub Link</a></div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email"><a href="mailto:${email}">Email: ${email}</a></div>
                    </div>
                </div>
            </div>
        `
        }

        if (index.school) {
            const {name, id, email, school} = index;
             return  `
            <div class="flex flex-col bg-slate-200 m-5 drop-shadow-lg rounded-b" id="profile">
                <div class="bg-blue-500 text-slate-100 text-xl text-center rounded-t" id="employee-information">
                    <div id="employee-name">${name}</div>
                    <div id="employee-title">Intern! </div>
                </div>
                <div class="p-5 rounded-b" id="container">
                    <div id="employee-details">
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#"><p>ID Number: </p>${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-school"><p>School Attended: </p>${school}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email"><a href="mailto:${email}"><p>Email: </p>${email}</a></div>
                    </div>
                </div>
            </div>
        `
        }
    });

    return empObj.join('');
};

const renderTemplate = (receiveData) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="./output.css" />
</head>
<body class="relative min-h-screen">
    <header>
        <h1 class="bg-blue-900 text-slate-100 text-center text-4xl p-5">Team Contact Information/Roles</h1>
    </header>
    <main class="flex flex-wrap justify-center">
        ${generatePortfolios(receiveData)}
    </main>
    <footer class="absolute inset-x-0 bottom-0 text-center">
        <h3>&copy; ${new Date().getFullYear()} by <a href="https://github.com/BrandonDaws">BrandonDaws</a></h3>
    </footer>
</body>
</html>
    `;
};


module.exports = renderTemplate;