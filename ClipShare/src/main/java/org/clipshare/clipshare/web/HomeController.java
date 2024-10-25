package org.clipshare.clipshare.web;

import org.clipshare.clipshare.business.VideoService;
import org.clipshare.clipshare.model.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.ByteArrayMultipartFileEditor;

import jakarta.validation.Valid;

import java.io.*;

// localhost:8080
@Controller
public class HomeController  {
    @InitBinder
    protected void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(byte[].class, new ByteArrayMultipartFileEditor());
    }
    // Utilisez un chemin absolu, par exemple :
    private final String UPLOAD_DIR = System.getProperty("user.home") + "/clipshare_uploads/";

    @Autowired
    private VideoService videoService;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("videos", videoService.getAllVideos());
        return "home";
    }

    @PostMapping("/saveVideo")
    public String uploadVideo(@Valid @ModelAttribute("video") Video video, BindingResult bindingResult,
            @RequestParam("file") MultipartFile file, Model model) {
        if (bindingResult.hasErrors()) {
            // Log the errors
            for (FieldError error : bindingResult.getFieldErrors()) {
                System.out.println("Error in " + error.getField() + ": " + error.getDefaultMessage());
            }
            model.addAttribute("errors", bindingResult.getAllErrors());
            System.out.println("video name : " + video.getName());
            return "redirect:/?error=validation_error";
        }

        if (!file.isEmpty()) {
            try {
                byte[] data = file.getBytes();
                video.setName(video.getName());
                video.setDescription(video.getDescription());
                video.setFile(data);
                videoService.saveVideo(video);
            } catch (Exception e) {
                e.printStackTrace();
                return "redirect:/?error=upload_failed";
            }
        } else {
            return "redirect:/?error=empty_file";
        }
        return "redirect:/";
    }



    /* @PostMapping("/saveVideo")
public String uploadVideo(@Valid @ModelAttribute("video") Video video, BindingResult bindingResult, @RequestParam("file") MultipartFile file, Model model) {
    if (bindingResult.hasErrors()) {

        // Log the errors
        for (FieldError error : bindingResult.getFieldErrors()) {
            System.out.println("Error in " + error.getField() + ": " + error.getDefaultMessage());
        }

        // Add errors to the model to display on the form
        model.addAttribute("errors", bindingResult.getAllErrors());
        System.out.println("video name : "+video.getName());
        return "redirect:/?error=validation_error";
    }
    
    if (!file.isEmpty()) {
        try { */
            // Save the file to a directory
            //String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            /* String filePath = UPLOAD_DIR + fileName;
            File dest = new File(filePath);
            file.transferTo(dest); */
            // byte[] data = file.getBytes();
            // Mettre les données dans la base de données
            //video.setName(video.getName());
            //video.setFile(data);
            // Enregistrer la vidéo dans la base de données
            //videoService.saveVideo(video);
            // System.out.println("File size : "+file.getSize());
            // Set the file path in the Video object
            /*video.setName(video.getName());  // Use the name from the form
            video.setFile(file.getBytes());  // Store the file path in the database
            videoService.saveVideo(video); */
        /* } catch (Exception e) {
            e.printStackTrace();
            return "redirect:/?error=upload_failed";
        }
    } else {
        return "redirect:/?error=empty_file";
    }
    return "redirect:/";
} */ 

    /* @PostMapping("/saveVideo")
    public String uploadVideo(@ModelAttribute("video") Video video, @RequestParam("file") MultipartFile file) {
    // public String uploadVideo(@Valid @ModelAttribute("video") Video video, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return "upload";
        }
        //System.out.println(video.getFile());
        // videoService.saveVideo(video);
        if (!file.isEmpty()) {
            try {
                // Save the file to a directory
                String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
                String filePath = UPLOAD_DIR + fileName;
                File dest = new File(filePath);
                file.transferTo(dest); // Transfer the file to the destination
    
                // Set the file path in the Video object
                video.setName(fileName);
                video.setFile(filePath); // Store the file path in the database
                videoService.saveVideo(video); // Save the Video object
            } catch (Exception e) {
                e.printStackTrace();
                return "redirect:/?error=upload_failed";
            }
        } else {
            return "redirect:/?error=empty_file";
        }
        return "redirect:/";
    } */

    /* @PostMapping("/saveVideo")
    public String addVideo(@RequestParam String name, @RequestParam("file") MultipartFile file) {
        if (!file.isEmpty()) {
            try {
                // Créer le répertoire de téléchargement s'il n'existe pas
                File uploadDir = new File(UPLOAD_DIR);
                if (!uploadDir.exists()) {
                    boolean dirCreated = uploadDir.mkdirs();
                    if (!dirCreated) {
                        System.err.println("Impossible de créer le répertoire de téléchargement : " + UPLOAD_DIR);
                        return "redirect:/?error=upload_failed";
                    }
                }
                
                // Générer un nom de fichier unique pour éviter les conflits
                String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
                String filePath = UPLOAD_DIR + fileName;
                
                // Sauvegarder le fichier dans le répertoire de téléchargement
                File dest = new File(filePath);
                file.transferTo(dest);

                // Vérifier si le fichier a bien été créé
                if (!dest.exists()) {
                    System.err.println("Le fichier n'a pas été créé : " + filePath);
                    return "redirect:/?error=file_not_created";
                }

                // Sauvegarder les informations de la vidéo dans la base de données
                Video video = new Video();
                video.setName(name);
                video.setFile(filePath);
                Video savedVideo = videoService.saveVideo(video);

                System.out.println("Name: "+name);
                System.out.println("File: "+filePath);
                
                if (savedVideo != null && savedVideo.getId() != null) {
                    System.out.println("Vidéo sauvegardée avec succès. ID: " + savedVideo.getId());
                } else {
                    System.err.println("Erreur lors de la sauvegarde de la vidéo dans la base de données.");
                    return "redirect:/?error=database_save_failed";
                }
            } catch (Exception e) {
                System.err.println("Erreur lors du traitement de la vidéo: " + e.getMessage());
                e.printStackTrace();
                return "redirect:/?error=processing_failed";
            }
        } else {
            System.err.println("Le fichier vidéo est vide.");
            return "redirect:/?error=empty_file";
        }
        return "redirect:/";
    } */ 

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
