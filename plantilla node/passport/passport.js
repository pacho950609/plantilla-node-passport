var LocalStrategy= require('passport-local').Strategy;

module.exports = function(passport)
{

    passport.serializeUser(function(user,done){ done(null,user);});
        
    passport.deserializeUser(function(obj,done){ done(null,obj);});


    passport.use(new LocalStrategy({
        
        passReqToCallback: true 
        
        }, function (req , username, password, done)
        {
        
            console.log(username);
            console.log(password);
           
            var user =
            {
                id: 'id' ,
                nombre : 'nombre',
                email: 'email' ,
            }

            if(username=="hola")
            {
                return done(null,user);
            }

          
            return done(null,false);
                                            
        
        }));
        


};