const clienteService = require('../services/cliente.service');

const GetClientes = async (req, res) => {
  try {
    const cpf = req.query.cpf;

    if (cpf) {
      const cliente = await clienteService.getClienteByCpf(`${cpf}`);
      return res.status(200).json(cliente);
    }

    const clientes = await clienteService.getClientes();
    return res.status(200).json(clientes);
  } catch (e) {
    return res.status(e.status).json({ message: e.message });
  }
};

const GetClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await clienteService.getClienteById(id);
    return res.status(200).json(cliente);
  } catch (e) {
    return res.status(e.status).json({ message: e.message });
  }
};

const CreateCliente = async (req, res) => {
  try {
    const token = await clienteService.createCliente(req.body);
    return res.status(201).json({ token });
  } catch (e) {
    return res.status(e.status).json({ message: e.message });
  }
}

const UpdateInfosCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await clienteService.updateInfosCliente(id, req.body);
    return res.status(200).json(updated);
  } catch (e) {
    return res.status(400).json({ message: 'Não foi possível atualizar o cliente' });
  }
}

const DeleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    await clienteService.deleteCliente(id);
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  GetClientes,
  GetClienteById,
  CreateCliente,
  UpdateInfosCliente,
  DeleteCliente,
};