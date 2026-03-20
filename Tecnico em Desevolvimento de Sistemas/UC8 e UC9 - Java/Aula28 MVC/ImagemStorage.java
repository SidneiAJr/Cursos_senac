package util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ImageStorage {
    // Define o nome da pasta onde as imagens serão armazenadas
    private static final String PASTA_IMAGEM = "imagens";
    
    // Método estático para salvar imagem
    // Recebe um arquivo e retorna o caminho do arquivo salvo
    public static String salvarImagem(File arquivo) {
        // Cria o diretório de imagens caso não exista
        try {
            // Se Nenhuma Arquivo for enviado, retorna null
            if(arquivo==null)return null;
            // Cria objeto que representa a pasta "Imagem"
            File pasta = new File(PASTA_IMAGEM);
            // se a pasta não existir , ela é criado
            if(!pasta.exists())pasta.mkdir();
            // Gera data/hora
            //Serve para criar nome unico
            String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));
            // Remove espaço e troca por "_"
            String nomeOrigin = arquivo.getName().replaceAll("\\s+","_");
            // Cria novo nome:
            String novoNome = timestamp+"_"+nomeOrigin;
            // Define o caminho de destino
            Path destino = Path.of(PASTA_IMAGEM,novoNome);
            Files.copy(
            arquivo.toPath(),
            destino,
            StandardCopyOption.REPLACE_EXISTING      
            );
            //Retorna o caminho da Imagem
            return PASTA_IMAGEM+ "/"+novoNome;
        } catch (Exception e) {
            // Caso de erro, mostra a mensagem
             throw new RuntimeException("Erro ao Enviar Imagem: "+ e.getMessage());
        }
        }
}
