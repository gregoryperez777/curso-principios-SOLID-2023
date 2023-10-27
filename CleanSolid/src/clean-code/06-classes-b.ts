(() => {

    // No aplicando el principio de responsabilidad unica

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
        birthdate : Date;        
        email     : string;
        gender    : Gender;
        name      : string;
        role      : string;
    }

    class User extends Person {
        public email        : string;
        public lastAccess   : Date;
        public role         : string;

        constructor ({ 
            email,
            role,
            name,
            gender,
            birthdate
        } : UserProps) {
            
            super({ name, gender, birthdate });

            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredencial () {
            return true;
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
    
    class UserSettings extends User {

            public lastOpenFolder: string;
            public workingDiretory: string;
            
            constructor ({ 
                birthdate,
                email,
                gender,
                lastOpenFolder,
                name,
                role,
                workingDiretory
            }: UserSettingProps ) {
                    
                super({ email, role, name, gender, birthdate });

                this.lastOpenFolder = lastOpenFolder;
                this.workingDiretory  = workingDiretory;
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