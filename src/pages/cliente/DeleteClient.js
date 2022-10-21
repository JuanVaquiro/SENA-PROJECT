const DeleteClient = async (nombre, id) => {
    console.log(nombre, id);
    const alertMessage = await Swal.fire({
      title: "Confirmación",
      text: `¿Estás seguro que deseas eliminar el registro: "${nombre}"?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3298dc",
      cancelButtonColor: "#f14668",
      cancelButtonText: "No",
      confirmButtonText: "Sí, eliminar",
    });
    if (!alertMessage.value) {
      return;
    }
    const resp = await fetch(
      `${Constante.RUTA_API}/delete_client.php?id=${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await resp.json();
    if (data) {
      toast.success("Producto eliminado ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      GetProduct()
    } else {
      toast.error("Error eliminando. Intenta de nuevo");
    }
  };

export default DeleteClient