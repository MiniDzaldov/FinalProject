﻿using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class User
{
    public string Id { get; set; }

    public string Name { get; set; }

    public string Password { get; set; }

    public string Role { get; set; }
}
