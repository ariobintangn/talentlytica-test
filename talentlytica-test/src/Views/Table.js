import { useState } from "react";
import TableRow from "../Components/TableRow";
import Button from "react"

export default function Table() {
  const [scores, setScores] = useState({
    criteria_1: {
      student_1: 0,
      student_2: 0,
      student_3: 0,
      student_4: 0,
      student_5: 0,
      student_6: 0,
      student_7: 0,
      student_8: 0,
      student_9: 0,
      student_10: 0,
    },
    criteria_2: {
      student_1: 0,
      student_2: 0,
      student_3: 0,
      student_4: 0,
      student_5: 0,
      student_6: 0,
      student_7: 0,
      student_8: 0,
      student_9: 0,
      student_10: 0,
    },
    criteria_3: {
      student_1: 0,
      student_2: 0,
      student_3: 0,
      student_4: 0,
      student_5: 0,
      student_6: 0,
      student_7: 0,
      student_8: 0,
      student_9: 0,
      student_10: 0,
    },
    criteria_4: {
      student_1: 0,
      student_2: 0,
      student_3: 0,
      student_4: 0,
      student_5: 0,
      student_6: 0,
      student_7: 0,
      student_8: 0,
      student_9: 0,
      student_10: 0,
    },
  });

  const handleScoreChange = (criterion, student, value) => {
    setScores((prevScores) => ({
      ...prevScores,
      [criterion]: {
        ...prevScores[criterion],
        [student]: value,
      },
    }));
  };

  const handleSave = () => {
    fetch("/save-score", {
      method: "POST",
      body: JSON.stringify(scores),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to save scores");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
      <button onClick={handleSave}>Simpan</button>
    </>
  );
}
 