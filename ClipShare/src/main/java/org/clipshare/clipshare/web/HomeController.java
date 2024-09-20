package org.clipshare.clipshare.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


// localhost:8080
@Controller
public class HomeController  {

    @GetMapping("/")
    public String home() {
        return "home";
    }
}
