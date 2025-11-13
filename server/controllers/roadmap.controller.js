const roadmapModel = require("../models/roadmap.model");
const { generateRoadmapAI } = require("../utils/aiHelper");

module.exports.generateRoadmap = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.userId;

    if (!prompt) {
      return res.status(400).json({ message: "Propmt Required" });
    }

    let roadmapData;
    try {
      roadmapData = await generateRoadmapAI(prompt);
    } catch (err) {
      console.error("AI generation failed:", err.message);
      return res.status(500).json({
        success: false,
        message: "AI failed to generate roadmap",
        error: err.message,
      });
    }

    const roadmap = await roadmapModel.create({
      userId,
      prompt,
      roadmap: roadmapData,
    });

    if (!roadmap) {
      return res
        .status(500)
        .json({ success: false, message: "Error saving roadmap to database" });
    }

    if (!roadmap) {
      return res.status(401).json({ message: "Error creating Roadmap" });
    }

    return res.status(200).json({
      message: "Roadmap created Successfully",
      success: true,
      roadmap: roadmap,
    });
  } catch (error) {
    console.log("Error Generating the roadmap in server :", error.message);
  }
};
