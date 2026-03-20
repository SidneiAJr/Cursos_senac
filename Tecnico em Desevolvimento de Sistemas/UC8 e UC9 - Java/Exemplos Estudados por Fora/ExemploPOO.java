/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.mavenproject1;

/**
 *
 * @author vapo
 */
public class Mavenproject1 {

    public static void main(String[] args) {
        System.out.println("==Bem Vindo ao Gerador de Planetas==");
        Planeta p1 = new Planeta("Jupiter", "Hidrogenio", 15);
        p1.Atmosfera();
        p1.Tipo();
        p1.Nome();
    }
}
interface VerificarPlaneta{
    void Tipo();
    void Atmosfera();
    void Nome();
}

class Planeta implements VerificarPlaneta{
    
    public String NomePlaneta;
    public String Atm;
    public double Gravidade;
    Planeta(String NomePlaneta,String Atm,double Gravidade){
        this.Atm = Atm;
        this.Gravidade = Gravidade;
        this.NomePlaneta = NomePlaneta;
    }

    @Override
    public void Tipo() {
        if(Gravidade<=30){
            System.out.println("Gravidade Altissima "+Gravidade);
        }else if(Gravidade>15){
            System.out.println("Gravidade Alta "+Gravidade);
        }else if(Gravidade<=5){
            System.out.println("Gravidade Baixa "+Gravidade);
        }
    }
    @Override
    public void Atmosfera(){
        switch (Atm) {
            case "Hidrogenio":
                System.out.println("Atmosfera Nao Respiravel "+ Atm);
                break;
                case "Oxigenio":
                System.out.println("Atmosfera Respiravel "+ Atm);
                break;
                case "Helio":
                System.out.println("Atmosfera Nao Respiravel "+ Atm);
                break;
                case "Nitrogeio":
                System.out.println("Cuidado "+ Atm);
                break;
            default:
                System.out.println("Atmosfera Nao Conhecida!!"+ Atm);
                break;
        }
}

    @Override
    public void Nome() {
        switch (NomePlaneta) {
            case "Jupiter":
                System.out.println("Planeta "+ NomePlaneta);
                break;
                case "Terra":
                System.out.println("Planeta "+ NomePlaneta);
                break;
                case "Mercurio":
                System.out.println("Planeta "+ NomePlaneta);
                break;
                case "Netuno":
                System.out.println("Planeta "+ NomePlaneta);
                break;
            default:
                System.out.println("Planeta "+ NomePlaneta);
                break;
        }
    }
    
    
}
