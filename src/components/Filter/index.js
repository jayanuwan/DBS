import React, { useState, useEffect } from 'react';
import { Column, Row } from '../styles';
import CSVReader from 'react-csv-reader';

// const rows = [
// 	{
// 		name: 'John',
// 		lastname: 'Doe',
// 		address: '120 jefferson st.',
// 		city: 'Riverside',
// 		code: ' NJ',
// 		postalcode: 8075,
// 	},
// 	{
// 		name: 'Jack',
// 		lastname: 'McGinnis',
// 		address: '220 hobo Av.',
// 		city: 'Phila',
// 		code: ' PA',
// 		postalcode: 9119,
// 	},
// 	{
// 		name: 'John "Da Man"',
// 		lastname: 'Repici',
// 		address: '120 Jefferson St.',
// 		city: 'Riverside',
// 		code: ' NJ',
// 		postalcode: 8075,
// 	},
// 	{
// 		name: 'Stephen',
// 		lastname: 'Tyler',
// 		address: '7452 Terrace "At the Plaza" road',
// 		city: 'SomeTown',
// 		code: 'SD',
// 		postalcode: 91234,
// 	},
// 	{
// 		name: null,
// 		lastname: 'Blankman',
// 		address: null,
// 		city: 'SomeTown',
// 		code: ' SD',
// 		postalcode: 298,
// 	},
// 	{
// 		name: 'Joan "the bone", Anne',
// 		lastname: 'Jet',
// 		address: '9th, at Terrace plc',
// 		city: 'Desert City',
// 		code: 'CO',
// 		postalcode: 123,
// 	},
// ];

const Filter = ({ handleChange }) => {
	const [columns, setColumns] = useState([
		{ key: 'id', name: 'name' },
		{ key: 'title', name: 'lastname' },
		{ key: 'count', name: 'address' },
		{ key: 'id', name: 'city' },
		{ key: 'title', name: 'code' },
		{ key: 'count', name: 'postalcode' },
	]);
	const [rows, setRows] = useState([]);
	const [filename, setFilename] = useState('');

	const handleForce = (data, fileInfo) => {
		localStorage.setItem(fileInfo.name, JSON.stringify(data));
		setFilename(fileInfo.name);
	};

	useEffect(() => {
		const datad = localStorage.getItem(filename);

		console.log(JSON.parse(datad));
		setRows(JSON.parse(datad));
	}, [filename]);

	const papaparseOptions = {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
	};
	return (
		<Row>
			<Column>
				<CSVReader
					cssClass="react-csv-input"
					label="Select CSV "
					onFileLoaded={handleForce}
					parserOptions={papaparseOptions}
				/>
			</Column>
			<Column>
				<table>
					<tbody>
						<tr>
							{(columns || []).map((item, index) => {
								return <th key={item.name + index}>{item.name}</th>;
							})}
						</tr>

						{rows &&
							(rows || []).map((rowItem, rowIndex) => {
								return (
									<tr key={rowIndex + 'row'}>
										<td>{rowItem.name}</td>
										<td>{rowItem.lastname}</td>
										<td>{rowItem.address}</td>
										<td>{rowItem.city}</td>
										<td>{rowItem.code}</td>
										<td>{rowItem.postalcode}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</Column>
		</Row>
	);
};

export default Filter;
