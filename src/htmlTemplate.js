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
        <h1 class="bg-blue-900 text-slate-100 text-center text-4xl p-5">My Team's Portfolios</h1>
    </header>
    <main class="flex flex-wrap justify-center">
        ${generatePortfolios(receiveData)}
    </main>
    <footer class="absolute inset-x-0 bottom-0 text-center">
        <h3>&copy; ${new Date().getFullYear()} by <a href="https://github.com/VMLujanJr">VMLujanJr</a></h3>
    </footer>
</body>
</html>
    `;
};

const generatePortfolios = (receiveData) => {
    
    const employee = receiveData.map(index => {

        

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
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#">${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-phone">${officeNumber}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email"><a href="mailto:${email}">${email}</a></div>
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
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#">${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-github">${github}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-github"><a href="https://github.com/${github}" target="_blank">${github}</a></div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email"><a href="mailto:${email}">${email}</a></div>
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
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="ID#">${id}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-school">${school}</div>
                        <div class="bg-slate-100 m-1 p-2 drop-shadow-lg" id="employee-email"><a href="mailto:${email}">${email}</a></div>
                    </div>
                </div>
            </div>
        `
        }
        else {
            console.log('...didn\'t Work...')
            return false;
        }
    });

};


module.exports = renderTemplate;