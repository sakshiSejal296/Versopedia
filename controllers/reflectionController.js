const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/reflections
const createReflection = async (req, res) => {
  try {
    const { poemId, name, text } = req.body;

    console.log("Request Body:", req.body);

    const newReflection = await prisma.reflection.create({
      data: {
        name,
        text,
        poem: {
          connect: {
            id: Number(poemId)
          }
        }
      }
    });

    res.status(201).json(newReflection);
  } catch (error) {
    console.error("POST Error:", error);
    res.status(500).json({ error: error.message });
  }
};

// GET /api/reflections/:poemId
const getReflectionsByPoemId = async (req, res) => {
  const { poemId } = req.params;
  try {
    const reflections = await prisma.reflection.findMany({
      where: { poemId: parseInt(poemId) },
      orderBy: { createdAt: 'desc' }
    });
    res.json(reflections);
  } catch (error) {
    console.error("Error fetching reflections:", error);
    res.status(500).json({ error: "Failed to fetch reflections" });
  }
};

// DELETE /api/reflections/:id
const deleteReflection = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reflection.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: "Reflection deleted successfully" });
  } catch (error) {
    console.error("Error deleting reflection:", error);
    res.status(500).json({ error: "Failed to delete reflection" });
  }
};

// GET /api/reflections/poem/today
const getTodayPoem = async (req, res) => {
   console.log("🔥 /poem/today endpoint hit");
  const today = new Date();
  const startOfDay = new Date(today.setHours(0, 0, 0, 0));
  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  console.log("Fetching poem between", startOfDay.toISOString(), "and", endOfDay.toISOString());

  try {
    const poem = await prisma.poem.findFirst({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay
        }
      }
    });

    if (!poem) {
      return res.status(404).json({ message: "No poem found for today" });
    }

    res.json(poem);
  } catch (error) {
    console.error("Error fetching today's poem:", error);
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createReflection,
  getReflectionsByPoemId,
  deleteReflection,
  getTodayPoem
};
