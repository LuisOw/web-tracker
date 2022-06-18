import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(title) {
  return {
    title,
    questions: [
      {
        query: "pergunta",
        order: "0",
        alternatives: [
          {
            type: "discursiva",
            text: "alternativa",
            value: "0",
          },
        ],
      },
      {
        query: "pergunta",
        order: "0",
        alternatives: [
          {
            type: "discursiva",
            text: "alternativa",
            value: "0",
          },
        ],
      },
    ],
  };
}

function QuestionRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.query}
        </TableCell>
        <TableCell>{row.order}</TableCell>
        <TableCell>
          <Button
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? "Esconder alternativa" : "Exibit alternativa"}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Alternativas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Texto</TableCell>
                    <TableCell>Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.alternatives.map((alternative) => (
                    <TableRow key={alternative.text}>
                      <TableCell component="th" scope="row">
                        {alternative.type}
                      </TableCell>
                      <TableCell>{alternative.text}</TableCell>
                      <TableCell>{alternative.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function QuestionnaireRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell>
          <Button
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? "Esconder questões" : "Exibir questões"}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h7" gutterBottom component="div">
                Questões
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Pergunta</TableCell>
                    <TableCell>Ordem</TableCell>
                    <TableCell>Alternativas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.questions.map((question) => (
                    <QuestionRow key={question.query} row={question} />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Frozen yoghurt"),
  createData("Ice cream sandwich"),
  createData("Eclair"),
  createData("Cupcake"),
  createData("Gingerbread"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Questões</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <QuestionnaireRow key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
