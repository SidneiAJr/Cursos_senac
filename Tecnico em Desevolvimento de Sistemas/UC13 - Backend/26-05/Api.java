import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class NewClass {
    public static void main(String[] args) {
        try {
        String Url = "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&hourly=temperature_2m,precipitation_probability,precipitation,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset&timezone=auto";
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create(Url))
        .GET()
        .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        String dados = response.body();
        
        JsonObject json = JsonParser.parseString(dados).getAsJsonObject();
        JsonObject current =json.getAsJsonObject("current");
        double temperatura = current.get("temperature_2m").getAsDouble();
         double vento = current.get("wind_speed_10m").getAsDouble();
        System.out.println("Temperatura C°"+temperatura);
        System.out.println("Velocidade do Vento Km/h°"+vento);
          
        } catch (Exception e) {
            e.printStackTrace();
        }
        
    }
    }
