package org.clipshare.clipshare.web;

import org.clipshare.clipshare.business.VideoService;
import org.clipshare.clipshare.model.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

// localhost:8080
@Controller
public class HomeController  {
    private final String UPLOAD_DIR = "uploads/";

    @Autowired
    private VideoService videoService;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("videos", videoService.getAllVideos());
        return "home";
    }

    @PostMapping("saveVideo")
    public String addVideo(@RequestParam String name, @RequestParam("file") MultipartFile file) {
        if(!file.isEmpty()) {
            try {
                // Create the uploads directory if it doesn't exist
                File uploadDir = new File(UPLOAD_DIR);
                if (!uploadDir.exists()) {
                    uploadDir.mkdirs();
                }
                // Save the file to the uploads directory
                String filePath = UPLOAD_DIR + file.getOriginalFilename();
                file.transferTo(new File(filePath));

                // Save video information to the database
                Video video = new Video();
                video.setName(name);
                video.setFile(filePath);
                videoService.saveVideo(video);
                //log.info("")
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        return "redirect:/home";
        /*
        @PostMapping("/videos")
    public String addVideo(@RequestParam String title, @RequestParam("file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                // Create the uploads directory if it doesn't exist
                File uploadDir = new File(UPLOAD_DIR);
                if (!uploadDir.exists()) {
                    uploadDir.mkdirs();
                }

                // Save the file to the uploads directory
                String filePath = UPLOAD_DIR + file.getOriginalFilename();
                file.transferTo(new File(filePath));

                // Save video information to the database
                Video video = new Video();
                video.setTitle(title);
                video.setFilePath(filePath);
                videoService.saveVideo(video);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "redirect:/videos";
    }

        Video video = new Video();
        video.setName(name);
        video.setFile(content);
        videoService.saveVideo(video);
         return "redirect:/home"; */

    }

    @GetMapping("/upload")
    public String upload(Model model) {
        model.addAttribute("videos", new Video());
        return "upload";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("/reels")
    public String reels() {
        return "reels";
    }

    @GetMapping("/trending")
    public String trending() {
        return "trending";
    }

    @GetMapping("/categories")
    public String categories() {
        return "categories";
    }

    /*
    public class VideoController {
    @Autowired
    private VideoService videoService;

    private final String UPLOAD_DIR = "uploads/";

    @GetMapping("/videos")
    public String getVideos(Model model) {
        model.addAttribute("videos", videoService.getAllVideos());
        return "video"; // This will return video.html
    }

    @PostMapping("/videos")
    public String addVideo(@RequestParam String title, @RequestParam("file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                // Create the uploads directory if it doesn't exist
                File uploadDir = new File(UPLOAD_DIR);
                if (!uploadDir.exists()) {
                    uploadDir.mkdirs();
                }

                // Save the file to the uploads directory
                String filePath = UPLOAD_DIR + file.getOriginalFilename();
                file.transferTo(new File(filePath));

                // Save video information to the database
                Video video = new Video();
                video.setTitle(title);
                video.setFilePath(filePath);
                videoService.saveVideo(video);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return "redirect:/videos";
    }
} */


}
