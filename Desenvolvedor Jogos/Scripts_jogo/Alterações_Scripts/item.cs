using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class Item
{
    public string itemName;  // Nome do item
    public Sprite itemIcon;  // Ícone do item
    public int itemID;       // ID único do item (pode ser usado para identificar o item)

    // Construtor para inicializar um item
    public Item(string name, Sprite icon, int id)
    {
        itemName = name;
        itemIcon = icon;
        itemID = id;
    }
}
