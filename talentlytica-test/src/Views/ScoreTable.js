import React, { useState } from 'react';

function ScoreTable() {
  const [scores, setScores] = useState({
    criteria_1: {
      student_1: 0,
      student_2: 0,
    },
    criteria_2: {
      student_1: 0,
      student_2: 0,
    },
  });
  

  const handleScoreChange = (event) => {
    const { criteria, student, value } = event.target.dataset;
    console.log(criteria);
    console.log(value, "VALUE");
    setScores((prevScores) => ({
      ...prevScores,
      [criteria]: {
        ...prevScores[criteria],
        [student]: parseInt(value),
      },
    })); 
    console.log(student.value);
    console.log("changinggg ni abis");
   
  };

  const handleSave = () => {
    // fetch('/scores', {
    //   method: 'POST',
    //   body: JSON.stringify(scores),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
    console.log(scores);
  };


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Criteria 1</th>
            <th>Criteria 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student 1</td>
            <td>
              <select
                data-criteria="criteria_1"
                data-student="student_1"
                onChange={handleScoreChange}
              >
                <option value="0">-</option>
                <option value="TESTING">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
            <td>
              <select
                data-criteria="criteria_2"
                data-student="student_1"
                onChange={handleScoreChange}
              >
                <option value="0">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Student 2</td>
            <td>
              <select
                data-criteria="criteria_1"
                data-student="student_2"
                onChange={handleScoreChange}
              >
                <option value="0">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
            <td>
              <select
                data-criteria="criteria_2"
                data-student="student_2"
                onChange={handleScoreChange}
              >
                <option value="0">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ScoreTable;