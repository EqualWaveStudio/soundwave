const submitFormData = async (formData) => {
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Recibir la respuesta del servidor si es necesario
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      console.error(error);
      // Manejar errores de solicitud si es necesario
    }
  };
  
  export default submitFormData;
  