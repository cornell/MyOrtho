USE [MyOrtho]
GO

/****** Object:  Table [dbo].[Patients]    Script Date: 10/09/2013 14:04:01 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Patients](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nom] [nvarchar](50) NULL,
	[Prenom] [nvarchar](50) NULL,
	[Telephone] [nvarchar](50) NULL,
	[Anamnese] [nvarchar](100) NULL,
	[DateBilan] [datetime] NULL,
	[DateDemandeBilan] [datetime] NULL,
	[OrigineDemande] [nvarchar](50) NULL,
	[DomaineIntervention] [nvarchar](50) NULL,
	[EtatBilan] [nvarchar](50) NULL,
 CONSTRAINT [PK_Patients] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


