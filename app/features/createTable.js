const createTableListings = async (knex) => {
  try {
    const tbl = "listings";
    const hasTable = await knex.schema.hasTable(tbl);
    if (hasTable) {
      //  console.log(tbl, "already exist!");
      return tbl;
    }
    await knex.schema.createTable(tbl, (table) => {
      table.string("image");
      table.string("title", 250);
      table.integer("idlisting").notNullable();
      table.string("link");
      table.string("content");
      table.string("tags");
      table.string("board");
      exoend(table);
    });
    // console.log(tbl, "successfully created");
    return tbl;
  } catch (error) {
    console.error(error.message);
  }
};

const createTableSchedule = async (knex) => {
  try {
    const tbl = "schedule";
    const hasTable = await knex.schema.hasTable(tbl);
    if (hasTable) {
      //  console.log(tbl, "already exist!");
      return tbl;
    }
    await knex.schema.createTable(tbl, (table) => {
      table.integer("idListing").notNullable();
      table.integer("count");
      table.string("status");
      exoend(table);
    });
    // console.log(tbl, "successfully created");
    return tbl;
  } catch (error) {
    console.error(error.message);
  }
};
const createTableSocials = async (knex) => {
  try {
    const tbl = "socials";
    const hasTable = await knex.schema.hasTable(tbl);
    if (hasTable) {
      //  console.log(tbl, "already exist!");
      return tbl;
    }
    await knex.schema.createTable(tbl, (table) => {
      table.string("social").notNullable();
      table.string("userName");
      table.string("password");
      table.string("cookies");
      table.integer("idParents");
      table.integer("url")
      exoend(table);
    });
    // console.log(tbl, "successfully created");
    return tbl;
  } catch (error) {
    console.error(error.message);
  }
};

const exoend = (table) => {
  table.increments("id", {
    primaryKey: true,
    notNullable: true,
  });
  table.datetime("createdAt").notNullable();
  table.datetime("updatedAt");
};
const initTable = async (knex) => {
  return new Promise(async (res, rej) => {
    let tables = [];
    // await createUsersTable(knex);
    let tb = await createTableListings(knex);
    tables.push(tb);
    tb = await createTableSchedule(knex);
    tables.push(tb);
    tb = await createTableSocials(knex);
    tables.push(tb);
    res(tables);
  });
};

module.exports = { initTable };
