namespace DAL.Models;

public partial class HelpContext : DbContext
{
    public HelpContext(DbContextOptions<HelpContext> options)
        : base(options)
    {
    }
    public HelpContext()
      
    {
    }
  
    public virtual DbSet<Adress> Adresses { get; set; }

    public virtual DbSet<Assist> Assists { get; set; }

    public virtual DbSet<Assistant> Assistants { get; set; }

    public virtual DbSet<HelpCategory> HelpCategories { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\USERS\\דיזלדוב מינה\\DESKTOP\\P\\FINALPROJECT\\SERVERSIDECODE\\DB\\DATABASE.MDF;Integrated Security=True;Connect Timeout=30");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Adress>(entity =>
        {
            entity.HasKey(e => e.Code).HasName("PK__Adresses__A25C5AA613DC0CC2");

            entity.Property(e => e.City)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.Street)
                .IsRequired()
                .HasMaxLength(50);
        });

        modelBuilder.Entity<Assist>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Assists__3214EC07F633A011");

            entity.Property(e => e.Id).HasMaxLength(9);
            entity.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.FirstName)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.LastName).HasMaxLength(20);
            entity.Property(e => e.PhoneNumber)
                .IsRequired()
                .HasMaxLength(10);

            entity.HasOne(d => d.AddressCodeNavigation).WithMany(p => p.Assists)
                .HasForeignKey(d => d.AddressCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assists_Adresses");

            entity.HasOne(d => d.CategoryCodeNavigation).WithMany(p => p.Assists)
                .HasForeignKey(d => d.CategoryCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assists_HelpCategory");
        });

        modelBuilder.Entity<Assistant>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Assistan__3214EC07EB63EAE3");

            entity.Property(e => e.Id).HasMaxLength(9);
            entity.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.FirstName)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.LastName).HasMaxLength(20);
            entity.Property(e => e.PhoneNumber)
                .IsRequired()
                .HasMaxLength(10);

            entity.HasOne(d => d.AddressCodeNavigation).WithMany(p => p.Assistants)
                .HasForeignKey(d => d.AddressCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assistants_Adresses");

            entity.HasOne(d => d.CategoryCodeNavigation).WithMany(p => p.Assistants)
                .HasForeignKey(d => d.CategoryCode)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Assistants_HelpCategory");
        });

        modelBuilder.Entity<HelpCategory>(entity =>
        {
            entity.HasKey(e => e.Code).HasName("PK__HelpCate__A25C5AA6D1B31D5E");

            entity.ToTable("HelpCategory");

            entity.Property(e => e.Type)
                .IsRequired()
                .HasMaxLength(50);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC0783E9680C");

            entity.Property(e => e.Id).HasMaxLength(9);
            entity.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.Password)
                .IsRequired()
                .HasMaxLength(10);
            entity.Property(e => e.Role)
                .IsRequired()
                .HasMaxLength(10);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
