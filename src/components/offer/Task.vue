<template>
  <tr>
    <!-- {isEditable ? (
        <div className="fr__label-wrapper">
          <input
            id="local-expense"
            type=""
            value={localExpense}
            className="fr__input-box"
            onChange={(e) => setLocalExpense(e.target.value)}
          />
          <input
            id="local-amount"
            type=""
            value={localAmount}
            className="fr__input-box"
            onChange={(e) => setLocalAmount(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <td>{expense.title}</td>
          <td>{expense.amount}</td>
        </div>
      )}
      <td>
        <select>
          {labels.map((label, i) => {
            return (
              <option
                key={i}
                value={label}
                onClick={() => assignLabelHandler(expense.id, label)}
              >
                {label}
              </option>
            );
          })}
        </select>
      </td>
      <td>
        <div>
          <span onClick={() => deleteExpense(expense.id)}>
            <DeleteIcon />
          </span>
          <span>
            <EditIcon onClick={() => toggleHandler(expense.id)} />
          </span>
          <span>
            <UnassignIcon onClick={() => unassignExpense(expense.id)} />
          </span>
        </div>
      </td> -->
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'task',
  data: () => ({}),
  methods: {
    // assignLabel() {
    //   throw new Error('Unimplemented')
    // }
  }
})

//  const assignLabelHandler = (id, label) => {
//     return assignLabel({ id, label });
//   };

//   const deleteExpense = (id) => {
//     return removeExpense({ id });
//   };
//   const unassignExpense = (id) => {
//     return unassignLabel({ id });
//   };

//   const toggleHandler = (id) => {
//     if (isEditable) {
//       const title = localExpense;
//       const amount = localAmount;
//       setIsEditable(false);
//       modifyExpense({ id, title, amount });
//       return;
//     }
//     if (!isEditable) {
//       setLocalExpense(expense.title);
//       setLocalAmount(expense.amount);
//       setIsEditable(true);
//       return;
//     }
//   };
</script>
<style></style>
