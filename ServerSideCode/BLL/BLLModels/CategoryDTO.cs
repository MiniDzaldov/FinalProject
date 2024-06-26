﻿namespace BLL.BLLModels;

public class CategoryDTO
{
    public int Code { get; set; }

    public string Type { get; set; }

    [JsonIgnore]
    public virtual ICollection<Assistant> Assistants { get; set; } = new List<Assistant>();

    [JsonIgnore]
    public virtual ICollection<Assist> Assists { get; set; } = new List<Assist>();

    #region Ctors
    public CategoryDTO()
    {

    }
    public CategoryDTO(string type)
    {
        this.Type = type;
    }
    public CategoryDTO(int code, string type)
    {
        this.Code = code;
        this.Type = type;
    }
    public CategoryDTO(int code, string type, ICollection<Assistant> assistants, ICollection<Assist> assists)
    {
        this.Code = code;
        this.Type = type;
        this.Assistants = assistants;
        this.Assists = assists;
    }
    #endregion
}
