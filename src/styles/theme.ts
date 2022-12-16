// Objeto com a definição do estilo para o tema lightTheme
const lightTheme = {
    primaryColor: "#27AE60",
    primaryHoverColor: "#219f56",
    secundaryColor: "#eb5757",
    gray0: "#F5F5F5",
    gray1: "#E0E0E0",
    gray3: "#828282",
    gray4: "#333333",
    alert: "#E60000",
    warning: "#FFCD07",
    sucess: "#168821",
    information: "#155BCB"
  };
  
  // Objeto com a definição do estilo para o tema darkTheme
  const darkTheme = {
    primaryColor: "#27AE60",
    colorPrimaryHover: "#219f56",
    secundaryColor: "#eb5757",
    gray4: "#F5F5F5",
    gray3: "#E0E0E0",
    gray1: "#828282",
    gray0: "#333333",
    alert: "#E60000",
    warning: "#FFCD07",
    sucess: "#168821",
    information: "#155BCB"
  };
  
  // Exportando as definições de estilo (lightTheme e darkTheme)
  // no objeto themes, que será usado na props theme do 
  // componente auxiliar <ThemeProvider>
  export const themes : any = {
    light: lightTheme,
    dark: darkTheme,
  };

