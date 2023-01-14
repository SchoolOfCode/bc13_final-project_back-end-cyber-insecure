import query from "../db/index.js";

async function getAllKnowledgeBank() {
    const allKnowledge = await query("SELECT * FROM knowledgeBank");
    return allKnowledge.rows;
  }

async function getKnowledgeByTitle(title) {
    const specificKnowledge = await query("SELECT * FROM knowledgeBank WHERE title ILIKE '%'||$1||'%'", [title]);
    return specificKnowledge.rows;
  }

  export {
    getAllKnowledgeBank,
    getKnowledgeByTitle
  } 