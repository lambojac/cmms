const WorkOrder=("./models/workorder.js")
// Create a new work order
app.post('/workorders', async (req, res) => {
    const { description, assetId, assignedTo } = req.body;
    try {
      const workOrder = new WorkOrder({ description, assetId, assignedTo, status: 'Pending' });
      await workOrder.save();
      res.json({ success: true, workOrder });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Work order creation failed' });
    }
  });

  // Get all work orders
app.get('/workorders', async (req, res) => {
    try {
      const workOrders = await WorkOrder.find();
      res.json({ success: true, workOrders });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Work order retrieval failed' });
    }
  });
  