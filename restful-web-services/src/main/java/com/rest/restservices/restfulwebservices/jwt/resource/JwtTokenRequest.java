package com.rest.restservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY1NTQ4OTc4NSwiaWF0IjoxNjU0ODg0OTg1fQ.Wp2ivLna4ke-FnximfZ9oWYPPhMB-NkmThmXo0FsPdYJ1ni5J0kxkS0riqzsA78nL1v6pNPCFBIb8LL1UZAq4g"
//    }
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY1NTQ5MDIzNCwiaWF0IjoxNjU0ODg1NDM0fQ.iQW9MBbuOgMtBJpv7t28XMod4xSNpwyVvzNb1xFWai04sUfeNgeiU2cqZ1-8Ol30Qr4oMAXiucpQ47bI85ojeA"
//    }



    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

