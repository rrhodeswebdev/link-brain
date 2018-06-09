import React from "react";
import Moment from "react-moment";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function DataTable(props) {
  const data = props.data;
  data.sort(function(a, b) {
    let dateA = new Date(a.updated),
      dateB = new Date(b.updated);
    return dateB - dateA;
  });

  return (
    <div>
      <Toolbar>
        <Typography variant="title">Most Recent Contacts</Typography>
      </Toolbar>
      <div style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Campaign</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Linking Url</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Last Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(0, 5).map(updated => {
              return (
                <TableRow key={updated._id}>
                  <TableCell>{updated.name}</TableCell>
                  <TableCell>{updated.email}</TableCell>
                  <TableCell>{updated.campaign.name}</TableCell>
                  <TableCell>{updated.website}</TableCell>
                  <TableCell>{updated.linkurl}</TableCell>
                  <TableCell>{updated.status}</TableCell>
                  <TableCell>{updated.notes}</TableCell>
                  <TableCell>
                    <Moment format="MMM DD, YYYY">{updated.updated}</Moment>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DataTable;
