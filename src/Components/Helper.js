export const helper = async () => {
    try {
      const req = await fetch("https://api.npoint.io/2eac858301b7bafa243d");
      const dato = await req.json();
      
      return dato.datos;
    } catch (Error) {
      console.log("Obtuvimos un error en "+Error);
    }
  };
