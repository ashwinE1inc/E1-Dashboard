import React, { useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import employeeData from '../employeeData'; 
import './styles.css'

const ExtractDocs = () => {
  const [selectedOption, setSelectedOption] = useState('employeeId');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    
    const updatedData = employeeData.filter((employee) => {
      if (selectedOption === 'employeeId') {
        return employee.id.includes(searchTerm);
      } else if (selectedOption === 'documentCategory') {
        return employee.category.includes(searchTerm);
      }
      return true;
    });
    
    setFilteredData(updatedData);
  };

  return (
    <>
      <Container className='my-5 py-4'>
      <Form onSubmit={handleSearch} >
        <Form.Check
          inline
          type="radio"
          label="Employee ID"
          value="employeeId"
          checked={selectedOption === 'employeeId'}
          onChange={handleOptionChange}
        />
        <Form.Check
          inline
          type="radio"
          label="Document Category"
          value="documentCategory"
          checked={selectedOption === 'documentCategory'}
          onChange={handleOptionChange}
        />
        {selectedOption === 'employeeId' && (
          <Form.Control
            type="text"
            placeholder="Enter employee ID"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className='my-4'
          />
        )}
        {selectedOption === 'documentCategory' && (
          <Form.Control
            type="text"
            placeholder="Enter document category"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className='my-4'
          />
        )}
        <button type="submit" className='search-btn'>Search</button>
      </Form>
      {filteredData.length > 0 && (
        <Table striped bordered hover className='my-5'>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Document Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </Container>
    </>
  );
};

export default ExtractDocs;
