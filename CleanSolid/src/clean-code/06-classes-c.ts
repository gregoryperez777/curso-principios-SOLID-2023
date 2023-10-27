(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composicion frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate   : Date; 
        gender      : Gender; 
        name        : string; 
    }

    class Person {
        public birthdate : Date;
        public gender    : Gender;
        public name      : string;

        constructor ({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {      
        email     : string;
        role      : string;
    }

    class User {
        public email        : string;
        public lastAccess   : Date;
        public role         : string;

        constructor ({ 
            email,
            role
        } : UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredencial () {
            return true;
        }
    }

    interface SettingProps {
        lastOpenFolder   : string,
        workingDiretory  : string
    }   
    
    class Settings {

            public lastOpenFolder: string;
            public workingDiretory: string;
            
            constructor ({
                lastOpenFolder,
                workingDiretory
            }: SettingProps ) {

                this.lastOpenFolder = lastOpenFolder;
                this.workingDiretory  = workingDiretory;
            }
    }


    interface UserSettingProps {
        birthdate        : Date,    
        email            : string,
        gender           : Gender,
        lastOpenFolder   : string,
        name             : string,
        role             : string,
        workingDiretory  : string,
    }   

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor ({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDiretory
        }: UserSettingProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDiretory });
        }

    }

    const userSetting = new UserSettings({
        workingDiretory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'hola@gmail.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1991-10-30')
    });

    console.log({ userSetting });

})()