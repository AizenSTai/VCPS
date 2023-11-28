import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Divider, InputLabel, Select, MenuItem, FormControl, Box, Typography } from '@mui/material';

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

const UsersInf = [{ name: "user1", namefa: "کاربر 1", accesses: ["a", "b"] }, { name: "user2", namefa: "کاربر 2", accesses: ["b", "c"] }, { name: "user3", namefa: "کاربر 3", accesses: ["c", "d"] }, { name: "user4", namefa: "کاربر 4", accesses: ["d", "e"] }]
const AllAccesses = ["a", "b", "c", "d", "e"]
function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TabWholesaleGoods() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }

  const onSelectChangeHandler = (event) => {
    let SelectedUser = null
    let Accc = []
    let Unique = []
    UsersInf.forEach(element => {
      // console.log(element)
      if (element.name == event.target.value) {
        SelectedUser = element
      }
    });

    setLeft(SelectedUser.accesses);
    // for(let ins of SelectedUser.accesses){
    //   const isThere = AllAccesses.includes({ins})
    //   console.log(isThere);
    //   }

    for (let allacc of AllAccesses) {
      for (let acc of SelectedUser.accesses) {
        // console.log(allacc + "  " + acc)
        if (allacc == acc) {
          if (Accc.includes(allacc)) {
            Accc.splice(Accc.indexOf(allacc), 1)
          }
          break
        }
        if (Accc.includes(allacc)) {
          continue
        } else {
          Accc.push(allacc)
        }
      }
    }
    setRight(Accc)
    // setRight(not(right, rightChecked));
    // setChecked(not(checked, rightChecked));
  }

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card sx={{ border: "1px solid #ddd" }}>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 360,
          height: 400,
          bgcolor: 'background.paper',
          direction: "ltr",
          overflow: 'auto',
          boxShadow: "1px 1px 1px #ddd"
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          // console.log(value)
          // console.log(items)
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
              sx={{ boxShadow: "1px 1px 1px #ddd", cursor: "pointer" }}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );

  return (
    <Box sx={{ minHeight: "500px", mb: 5, mt: 5 }} justifyContent="center" alignItems="center">
      <Typography sx={{ m: 5 }}>برای دادن دسترسی های لازم،کاربر مورد نظر را انتخاب کرده و دسترسی های لازم را از جدول دسترسی های موجود انتخاب کنید</Typography>
      <Box sx={{ mb: 5 }}>
        <FormControl sx={{ alignSelf: "center", width: "10%", ml: 5, mr: 5 }}>
          <InputLabel>کاربر</InputLabel>
          <Select onChange={onSelectChangeHandler} label='مشخصات' >
            <MenuItem sx={{ direction: "rtl" }} value="">هیچکدام</MenuItem>
            {UsersInf.map((itms) => {
              return (
                <MenuItem sx={{ direction: "rtl" }} value={itms.name}>{itms.namefa}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>{customList('دسترسی های داده شده', left)}</Box>
        <Box sx={{ marginTop: "auto", marginBottom: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: "column", m: 5 }} alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="contained"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="contained"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
            >
              &lt;
            </Button>
            <Button
              variant="contained"
              onClick={()=>{console.log(right), console.log(left)}}
            >
              click
            </Button>
          </Box>
        </Box>
        <Box>{customList('دسترسی های موجود', right)}</Box>
      </Box>
    </Box>
  );
}