import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0x1d60a7bE6487324131c970e8DD1667B67A843C4C");

(async () => {
  try {
    // Log the current roles.
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    // Must leave vote contract in the minter role
    await token.roles.setAll({ admin: [], minter: ['0xB8900811b8f3b8454D621f62d5c38ae21F4b14fA'] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO trasury", error);
  }
})();