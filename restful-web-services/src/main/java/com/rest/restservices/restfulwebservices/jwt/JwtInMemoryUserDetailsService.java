package com.rest.restservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "in28minutes",
        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
    
    inMemoryUserList.add(new JwtUserDetails(2L, "ranga",
            "$2a$10$YQm1iFsBSom.qtGLgTccT.b0g5S9eC54Nz1b2V89YDIUu7Z2e.Qvu", "ROLE_USER_2"));
    
    inMemoryUserList.add(new JwtUserDetails(3L,"ankitjammu",
            "$2a$10$x/FzdgW4Vl4ALhdHNlokSuQfMauTGFX5epIWhiNtE5HtH2VHk3DHa", "ROLE_USER_2"));
    
    
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


