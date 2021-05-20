import styled from 'styled-components';

function getWidth(sp) {
	if (!sp) return;
	let width = (sp / 12) * 100;
	return `width:${width}%`;
}
export const Column = styled.div`
	float: left;
	width: 100%;
	${({ xs }) => (xs ? getWidth(xs) : 'width:100%')}

	@media only screen and (min-width: 768px) {
		${({ sm }) => sm && getWidth(sm)}
	}
	@media only screen and (min-width: 992px) {
		${({ md }) => md && getWidth(md)}
	}
	@media only screen and (min-width: 1200px) {
		${({ lg }) => lg && getWidth(lg)}
	}
`;

export const Row = styled.div`
	&::after {
		content: '';
		clear: both;
		display: table;
		padding: 15px;
	}
`;
