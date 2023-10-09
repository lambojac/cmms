const Asset=("./models/assets")

app.post('/assets', async (req, res) => {
    const { name, type, location } = req.body;
    try {
      const asset = new Asset({ name, type, location });
      await asset.save();
      res.json({ success: true, asset });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Asset creation failed' });
    }
  });

  
// Get all assets
app.get('/assets', async (req, res) => {
    try {
      const assets = await Asset.find();
      res.json({ success: true, assets });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Asset retrieval failed' });
    }
  });
  