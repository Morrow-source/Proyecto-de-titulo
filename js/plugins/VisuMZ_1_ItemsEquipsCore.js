//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.43;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.43] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","CommandAddOptimize:eval":"true","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

const _0x1d9b69=_0x30c0;(function(_0x363222,_0x370b62){const _0x211d46=_0x30c0,_0x209208=_0x363222();while(!![]){try{const _0x27a6cb=parseInt(_0x211d46(0x43e))/0x1+-parseInt(_0x211d46(0xd6))/0x2*(-parseInt(_0x211d46(0x14f))/0x3)+parseInt(_0x211d46(0x367))/0x4+parseInt(_0x211d46(0x329))/0x5*(parseInt(_0x211d46(0x38a))/0x6)+parseInt(_0x211d46(0x3cd))/0x7*(parseInt(_0x211d46(0x43d))/0x8)+parseInt(_0x211d46(0xb6))/0x9*(parseInt(_0x211d46(0x316))/0xa)+parseInt(_0x211d46(0x2d8))/0xb*(-parseInt(_0x211d46(0x448))/0xc);if(_0x27a6cb===_0x370b62)break;else _0x209208['push'](_0x209208['shift']());}catch(_0x13fe7a){_0x209208['push'](_0x209208['shift']());}}}(_0x264f,0x70b8b));function _0x264f(){const _0x18e2c7=['equip','setBackgroundType','paramValueFontSize','createItemWindow','Window_ShopBuy_item','processShiftRemoveShortcut','powerUpColor','\x5cI[%1]','_list','checkShiftRemoveShortcut','setItemWindow','consumable','Game_Party_gainItem_artifact','atypeId','Scope%1','foreground','\x5cb%1\x5cb','_forcedSlots','drawItemName','StatusWindow','flatMP','isPageChangeRequested','ItemScene','playBuzzerSound','createStatusWindow','isPartyArtifact','1003630WwTtIL','DrawIcons','iconIndex','KeyItemProtect','Scene_Shop_createCategoryWindow','makeDeepCopy','getItemRepeatsLabel','commandNameWindowDrawBackground','isHoverEnabled','Game_Actor_tradeItemWithParty','buy','New','pageup','getItemEffectsAddedStatesBuffsLabel','NotConsumable','MAT','_helpWindow','commandSell','meetsEquipRequirements','1433655OBeoxy','meetsEquipRequirement','Scene_Equip_onActorChange','isArtifact','ParamValueFontSize','inBattle','select','middle','isShiftShortcutKeyForRemove','drawItemHitType','isDualWield','hitType','setHelpWindowItem','isOptimizeCommandAdded','contents','Step2Start','isNewItem','_allowArtifactTraitObjects','active','Window_ShopStatus_setItem','isWeapon','smallParamFontSize','CONSUMABLE','getItemEffectsMpDamageLabel','Game_Actor_forceChangeEquip','%1%','Game_Actor_changeEquip','TP\x20RECOVERY','isItem','agi','occasion','onCategoryCancelItemsEquipsCore','onSlotCancel','_checkEquipRequirements','fill','contentsBack','_paramPlus','_scrollDuration','RemoveEquipIcon','weaponTypes','Settings','addStateBuffChanges','isOpenAndActive','itemWindowRectItemsEquipsCore','\x5cI[%1]%2','match','Scene_Shop_activateSellWindow','ScopeRandomAllies','FieldUsable','right','Scene_Shop_categoryWindowRect','addChild','_itemData','prepare','getItemDamageAmountLabel','ActorResetEquipSlots','_slotId','ParseArmorNotetags','fontSize','width','optKeyItemsNumber','ARRAYFUNC','1244080CDwcZb','Scene_Shop_onSellOk','Categories','onCategoryOk','getItemEffectsHpRecoveryLabel','ParseItemNotetags','getItemEffectsRemovedStatesBuffsLabel','Window_Selectable_setHelpWindowItem','_commandWindow','removeDebuff','getItemSuccessRateLabel','commandStyle','isUseModernControls','drawItemActorMenuImage','_newLabelSprites','actor','Scene_Shop_goldWindowRect','iconHeight','getItemScopeText','clearNewLabelFromItem','isCommandEnabled','drawItemDamageAmount','process_VisuMZ_ItemsEquipsCore_EquipSlots','Remove\x20all\x20available\x20equipment.','DrawPortraitJS','newLabelEnabled','_commandNameWindow','drawItemSuccessRate','Scene_Shop_onBuyCancel','changePaintOpacity','shift','left','ITEMS_EQUIPS_CORE','center','categoryNameWindowDrawText','6taApuj','getItemEffectsTpRecoveryText','Damage\x20Formula\x20Error\x20for\x20%1','categoryList','isRightInputMode','drawNewLabelIcon','drawItemEffectsMpDamage','Scene_Shop_doSell','buttonAssistKey2','JSON','MP\x20RECOVERY','Scene_Equip_itemWindowRect','Scene_Equip_createCommandWindow','loadSystem','setCategory','setHandler','ParseClassNotetags','onSellOkItemsEquipsCore','splice','Scene_Shop_commandWindowRect','getItemEffectsSelfTpGainText','_itemWindow','trim','getItemsEquipsCoreBackColor2','Scene_Equip_create','Scene_Shop_commandBuy','Scene_Equip_helpWindowRect','CmdIconEquip','round','getItemEffectsHpDamageLabel','actorParams','_classIDs','paramPlusItemsEquipsCoreCustomJS','ActorChangeEquipSlots','OffsetY','ItemMenuStatusBgType','RegularItems','troopArtifacts','BorderRegExp','drawActorCharacter','isPressed','isEnabled','resetTextColor','currentClass','iconWidth','drawParamText','rateHP','iconText','CmdIconBuy','Window_ShopSell_isEnabled','drawItemEffectsAddedStatesBuffs','ElementWeapon','(%1)','placeNewLabel','buffIconIndex','mainFontSize','buyWindowRect','value1','Parse_Notetags_EquipSlots','_itemIDs','+%1','type','sellPriceOfItem','getInputMultiButtonStrings','process_VisuMZ_ItemsEquipsCore_Notetags','speed','isLearnedSkill','2035054isRYkz','isClearCommandEnabled','Game_BattlerBase_canEquip_artifact','postCreateItemWindowModernControls','loadPicture','drawItemDarkRect','getItemSuccessRateText','prepareRefreshItemsEquipsCoreLayout','Game_BattlerBase_meetsItemConditions','getItemRepeatsText','Window_EquipStatus_refresh','deactivate','tradeItemWithParty','drawItemKeyData','Game_Party_setupBattleTestItems_artifact','note','drawItemStyleIconText','item-%1','AllItems','addClearCommand','ExtDisplayedParams','ItemQuantityFmt','addBuyCommand','postCreateItemsEquipsCore','isRepeated','_skillIDs','getItemEffectsSelfTpGainLabel','fillRect','powerDownColor','Step1End','buttonAssistText3','_goodsCount','Nonconsumable','itemWindowRect','setObject','getItemEffectsMpRecoveryLabel','REMOVED\x20EFFECTS','helpWindowRectItemsEquipsCore','statusWidth','getColor','_buttonAssistWindow','isStackableArtifact','callUpdateHelp','bitmap','Scene_Shop_commandSell','systemColor','refreshItemsEquipsCoreNoMenuImage','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','makeItemData','smoothSelect','_tempActor','background','removeBuff','removeStateBuffChanges','maxItemAmount','Scene_Equip_onSlotCancel','StatusWindowWidth','prepareNewEquipSlotsOnLoad','_armorIDs','Scene_Equip_statusWindowRect','_shopStatusMenuMode','ParseAllNotetags','ShopMenuStatusStandard','STRUCT','CmdCancelRename','getItemDamageAmountLabelOriginal','Game_Actor_discardEquip','itemEnableJS','VisuMZ_1_SkillsStatesCore','onSlotOkAutoSelect','setItem','CmdTextAlign','WEAPON','getItemEffectsMpDamageText','allowCreateStatusWindow','Scene_Equip_createSlotWindow','map','VisuMZ_0_CoreEngine','drawNewLabelText','onSellCancel','cursorRight','Scene_Shop_doBuy','%1-%2','LabelRecoverHP','createNewLabelSprite','call','getItemConsumableText','placeItemNewLabel','Game_BattlerBase_param_artifact','_slotWindow','anyEmptyEquipSlotsOfSameEtype','create','Occasion%1','uiMenuStyle','processCursorMoveModernControls','EquipParams','activate','setText','buttonAssistOffset3','MANUAL','getSkillIdWithName','mainFontFace','commandWindowRectItemsEquipsCore','isUseItemsEquipsCoreUpdatedLayout','discardEquip','indexOf','number','CommandAddClear','hide','initNewLabelSprites','canShiftRemoveEquipment','_customItemInfo','16dfkBCa','607198bnVUXy','fontSizeRatio','length','HitType%1','def','parse','helpWindowRect','LayoutStyle','isPlaytest','_allowArtifactParamBase','9186828NNGYNy','SCOPE','isCursorMovable','LabelSelfGainTP','addState','ConvertNumberToString','canEquip','category','buttonAssistItemListRequirement','Width','FontColor','onTouchCancel','reloadMapIfUpdated','equipTypes','categoryStyle','addItemCategory','index','drawCustomShopGraphicLoad','createSlotWindow','money','drawItemEffectsTpRecovery','refreshCursor','Scene_Equip_commandEquip','NUM','categoryNameWindowCenter','Blacklist','LabelRecoverTP','HIT\x20TYPE','_sellWindow','hideNewLabelSprites','getMatchingInitEquip','EFFECT_GAIN_TP','72CpcpIk','forceChangeEquipSlots','processCursorMove','Scene_Shop_sellingPrice','itemPadding','activateSellWindow','update','icon','updateCommandNameWindow','maxVisibleItems','getItemEffectsHpDamageText','allMembers','defaultItemMax','push','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','versionId','parameters','elements','addLoadListener','addInnerChild','currentExt','isEquipChangeOk','selfTP','limitedPageUpDownSceneCheck','nonRemovableEtypes','getItemDamageAmountText','price','getItemQuantityText','modifiedBuyPriceItemsEquipsCore','isEquipCommandEnabled','equipSlots','statusWindowRect','26YADgZJ','getProxyItem','getEmptyEquipSlotOfSameEtype','RemoveEquipText','commandStyleCheck','Window_ShopBuy_price','addOptimizeCommand','_weaponIDs','CmdHideDisabled','Slots','sell','setupBattleTestItems','pop','Scene_Equip_slotWindowRect','getClassIdWithName','processHandling','adjustHiddenShownGoods','Scene_Boot_onDatabaseLoaded','Window_Selectable_update','isSoleArmorType','drawItemConsumable','SwitchBuy','SwitchSell','getItemDamageAmountTextOriginal','_getEquipRequirements','max','drawItemOccasion','_bypassProxy','_data','×%1','buttonAssistText2','categoryWindowRectItemsEquipsCore','effects','Window_Selectable_refresh','damage','isUseParamNamesWithIcons','Scene_Shop_onBuyOk','Scene_Item_categoryWindowRect','NoChangeMarker','textColor','code','SetupProxyItemGroups','LabelDamageTP','getItemsEquipsCoreBackColor1','categoryWindowRect','isProxyItem','onActorChange','cursorPageup','gaugeBackColor','lineHeight','FadeSpeed','paramValueByName','LabelSuccessRate','VisuMZ_1_MainMenuCore','isClicked','_bypassReleaseUnequippableItemsItemsEquipsCore','ShowShopStatus','isBattleTest','commandWindowRect','Game_BattlerBase_param','onBuyCancelItemsEquipsCore','Window_ItemList_drawItem','drawPossession','onTouchOk','textSizeEx','sellPriceRate','getClassRequirements','Parse_Notetags_ParamJS','Parse_Notetags_Category','isShiftRemoveShortcutEnabled','numberWindowRectItemsEquipsCore','createCommandNameWindow','mdf','isSellCommandEnabled','changeTextColor','level','drawItemEffectsHpDamage','drawItemEffectsHpRecovery','slotWindowRectItemsEquipsCore','BuyPriceJS','filter','calcWindowHeight','Scene_Shop_sellWindowRect','_getClassRequirements','makeCommandList','isOpen','BattleUsable','Pick\x20and\x20choose\x20equipment\x20to\x20change.','commandNameWindowCenter','HiddenItemA','drawItemQuantity','Scene_Shop_createSellWindow','getDamageStyle','gainTP','Actors','flatHP','_actor','CmdIconSell','_newLabelOpacity','buyWindowRectItemsEquipsCore','_goods','EFFECT_ADD_BUFF','Step2End','optimize','format','drawItemDamage','SpeedNeg2000','Scene_Item_helpWindowRect','forceChangeEquip','isBuyCommandEnabled','ELEMENT','_buyWindowLastIndex','equips','FadeLimit','_numberWindow','EnableLayout','===','postCreateCategoryWindowItemsEquipsCore','createCommandWindow','scope','OCCASION','39027WrgQhK','Scene_Item_createItemWindow','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','allowCommandWindowCursorUp','clear','param','commandEquip','numberWindowRect','REPEAT','item','Step3End','wtypeId','_handlers','repeats','DrawBackRect','setNewItem','_categoryWindow','categoryStyleCheck','CannotEquipMarker','drawRemoveItem','cursorLeft','_purchaseOnly','Window_ItemList_item','setShopStatusWindowMode','getItemHitTypeLabel','_money','isClearCommandAdded','MaxItems','onSlotOk','drawItemEffectsSelfTpGain','_cache','formula','drawing','Game_Party_gainItem','etypeId','Parse_Notetags_Prices','getItemColor','equipSlotIndex','cursorDown','helpAreaTop','uiInputPosition','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','EFFECT_ADD_DEBUFF','MaxArmors','meetsClassRequirements','paramJS','drawItemNumber','playOkSound','mmp','shouldCommandWindowExist','drawActorParamDifference','members','weapon-%1','value2','updateChangedSlots','textWidth','Scene_Shop_prepare','Scene_Equip_onSlotOk','setTopRow','0000','nextActor','drawTextEx','drawIcon','slotWindowRect','HiddenItemB','EquipScene','ShopScene','hitIndex','hpRate','commandSellItemsEquipsCore','ParseWeaponNotetags','_newLabelOpacityChange','atk','_category','prototype','getItemIdWithName','itemHasEquipLimit','W%1','damageColor','_resetFontColor','drawItemScope','cancel','loseItem','pagedown','setHp','uiHelpPosition','tpGain','ParamChangeFontSize','postCreateSlotWindowItemsEquipsCore','hideDisabledCommands','clearNewItem','drawItemData','CoreEngine','createSellWindow','itemLineRect','refresh','Text','proxyItem','setupItemDamageTempActors','?????','createCategoryWindow','playCursorSound','drawParamsItemsEquipsCore','constructor','Scene_Shop_numberWindowRect','CmdIconClear','drawItemEffectsMpRecovery','_tempActorB','log','currencyUnit','toLowerCase','onTouchSelectModern','ARMOR','_resetFontSize','QoL','IconSet','resetFontSettings','getItemSpeedLabel','AlwaysUsable','isTriggered','addEquipCommand','NonRemoveETypes','Scene_Equip_commandWindowRect','QUANTITY','updateHelp','alterSkillName','show','helpAreaHeight','Parse_Notetags_Batch','setTempActor','helpDescriptionText','Window_ItemCategory_initialize','itemDataFontSize','paramBase','updateCategoryNameWindow','drawEquipData','SellPriceJS','AllWeapons','CmdIconOptimize','getItemEffectsTpDamageLabel','ARRAYSTR','Scene_Shop_buyWindowRect','loadCharacter','value','changeEquipById','EquipAdjustHpMp','SwitchID','Param','partyArtifacts','_statusWindow','getItemEffectsMpRecoveryText','visible','SpeedNeg999','List','Scene_Shop_create','mainAreaHeight','ATK','drawItemDamageElement','dataId','onSellOk','updateMoneyAmount','ARRAYSTRUCT','ConvertParams','doSell','AllArmors','MultiplierStandard','VisuMZ_1_BattleCore','getNextAvailableEtypeId','processDrawIcon','drawItemCustomEntries','geUpdatedLayoutStatusWidth','getItemEffectsHpRecoveryText','changeEquip','drawItemStyleIcon','getItemEffectsAddedStatesBuffsText','keyItem','ElementNone','adjustItemWidthByStatus','rateMP','Speed1','_bypassNewLabel','canUse','#%1','LabelRemove','innerHeight','LabelHitType','HP\x20DAMAGE','getItemSpeedText','helpDesc','traitObjects','toUpperCase','mainAreaTop','initNewItemsList','itemAt','isOptimizeEquipOk','categories','Game_Party_initialize','concat','Step1Start','onMenuImageLoad','height','name','refreshActorEquipSlotsIfUpdated','EFFECT_ADD_STATE','EFFECT_RECOVER_MP','floor','getItemHitTypeText','getItemDamageElementLabel','buttonAssistCategory','Step3Start','Icon','ItemsEquipsCore','CommandAddOptimize','isHandled','scrollTo','Speed1000','processTouchModernControls','doBuy','switchProxyItem','includes','revertGlobalNamespaceVariables','windowPadding','paramchangeTextColor','nonOptimizeEtypes','Window_ShopCommand_initialize','ShiftShortcutKey','LabelDamageHP','getItemEffects','exit','weapon','removeState','meetsItemConditionsJS','Parse_Notetags_EnableJS','_buyWindow','deselect','onTouchSelectModernControls','drawParamName','RegExp','onBuyOk','_scene','ItemQuantityFontSize','A%1','auto','normalColor','_dummyWindow','_equips','clamp','SellPriceRate','ceil','_calculatingJSParameters','getItemDamageElementText','itemTextAlign','getWeaponIdWithName','armor-%1','Scene_Shop_onCategoryCancel','ARRAYEVAL','drawItemRepeats','drawCurrencyValue','ScopeAlliesButUser','onCategoryCancel','DrawEquipData','commandName','prepareItemCustomData','categoryNameWindowDrawBackground','battleMembers','checkItemConditionsSwitchNotetags','boxWidth','drawItemEffectsRemovedStatesBuffs','isEquipItem','equipAdjustHpMp','artifacts','isGoodShown','addCommand','MaxIcons','registerCommand','isSoleWeaponType','LUK','KeyItems','allowShiftScrolling','meetsItemConditions','_tempActorA','MaxWeapons','createCategoryNameWindow','sellingPrice','isShowNew','split','isKeyItem','sellWindowRect','Scene_Item_itemWindowRect','EFFECT_REMOVE_STATE','Window_EquipCommand_initialize','ListWindowCols','drawText','armors','Game_Party_numItems','currentSymbol','SPEED','Game_Enemy_traitObjects_artifact','SetupProxyItemGroup','setValue','isHovered','getInputButtonString','commandBuyItemsEquipsCore','Scene_Load_reloadMapIfUpdated','onBuyCancel','Window_Selectable_initialize','BackRectColor','paramPlus','Game_BattlerBase_paramPlus_artifact','remove','getItemEffectsRemovedStatesBuffsText','Window_ItemList_maxCols','TP\x20DAMAGE','maxItems','Equip\x20the\x20strongest\x20available\x20equipment.','isBottomHelpMode','onTouchSelect','Scene_Shop_onSellCancel','buttonAssistKey1','_item','meetsItemConditionsNotetags','getItemOccasionText','drawCustomShopGraphic','popScene','opacity','TextAlign','statusWindowRectItemsEquipsCore','buttonAssistSlotWindowShift','addSellCommand','description','getMenuImage','text','processCursorSpecialCheckModernControls','maxCols','return\x200','armorTypes','successRate','baseSellingPrice','MenuPortraits','Scene_ItemBase_activateItemWindow','replace','Window_EquipItem_includes','drawItemEquipType','addCancelCommand','isClearEquipOk','Scene_Item_createCategoryWindow','Window_ItemList_updateHelp','getItemEffectsTpRecoveryLabel','HP\x20RECOVERY','values','version','bind','DamageType%1','Scene_Shop_helpWindowRect','_doubleTouch','isOptimizeCommandEnabled','LabelElement','Window_ShopBuy_refresh','setStatusWindow','getItemDamageAmountTextBattleCore','MDF','commandNameWindowDrawText','IncludeShopItem','Whitelist','_categoryNameWindow','determineBaseSellingPrice','Window_ItemList_colSpacing','isTroopArtifact','initialize','_newItemsList','removeBattleTestArtifacts','process_VisuMZ_ItemsEquipsCore_RegExp','CmdStyle','loadFaceImages','object','equip2','previousActor','isMainMenuCoreMenuImageOptionAvailable','blt','+%1%','cursorPagedown','Game_Actor_equips_artifacts','SUCCESS\x20RATE','mainCommandWidth','itypeId','drawItemEffects','buttonAssistText1','categoryItemTypes','isArmor','Game_Actor_paramPlus','numItems','mpRate','user','33dznBCz','processCursorHomeEndTrigger','gainItem','possession','DrawFaceJS','canConsumeItem','Parse_Notetags_ParamValues','getItemDamageAmountLabelBattleCore','goldWindowRectItemsEquipsCore','Scene_Shop_buyingPrice','convertInitEquipsToItems','Consumable','onDatabaseLoaded','isCancelled','innerWidth','paintOpacity','DrawItemData','LabelConsume','addWindow','down','luk','paramId','releaseUnequippableItems','cursorUp','resetShopSwitches','drawItem','optimizeCmdDesc','_shopStatusMenuAlly','updatedLayoutStyle','Window_EquipItem_isEnabled','changeBuff','colSpacing','setMp','commandBuy','USER\x20TP\x20GAIN','goldWindowRect'];_0x264f=function(){return _0x18e2c7;};return _0x264f();}var label=_0x1d9b69(0x222),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1d9b69(0x126)](function(_0x5e8546){const _0xc09e73=_0x1d9b69;return _0x5e8546['status']&&_0x5e8546['description'][_0xc09e73(0x22a)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x1d9b69(0x351)]||{},VisuMZ[_0x1d9b69(0x1f1)]=function(_0x3bb452,_0x2a416f){const _0x2c9c10=_0x1d9b69;for(const _0x509a73 in _0x2a416f){if(_0x509a73['match'](/(.*):(.*)/i)){const _0x4bb1f2=String(RegExp['$1']),_0x45ad0e=String(RegExp['$2'])[_0x2c9c10(0x20d)]()[_0x2c9c10(0x3a0)]();let _0x47de5a,_0x2b3045,_0x258aa4;switch(_0x45ad0e){case _0x2c9c10(0xad):_0x47de5a=_0x2a416f[_0x509a73]!==''?Number(_0x2a416f[_0x509a73]):0x0;break;case'ARRAYNUM':_0x2b3045=_0x2a416f[_0x509a73]!==''?JSON[_0x2c9c10(0x443)](_0x2a416f[_0x509a73]):[],_0x47de5a=_0x2b3045[_0x2c9c10(0x419)](_0x52f00c=>Number(_0x52f00c));break;case'EVAL':_0x47de5a=_0x2a416f[_0x509a73]!==''?eval(_0x2a416f[_0x509a73]):null;break;case _0x2c9c10(0x24e):_0x2b3045=_0x2a416f[_0x509a73]!==''?JSON['parse'](_0x2a416f[_0x509a73]):[],_0x47de5a=_0x2b3045[_0x2c9c10(0x419)](_0x427587=>eval(_0x427587));break;case _0x2c9c10(0x393):_0x47de5a=_0x2a416f[_0x509a73]!==''?JSON[_0x2c9c10(0x443)](_0x2a416f[_0x509a73]):'';break;case'ARRAYJSON':_0x2b3045=_0x2a416f[_0x509a73]!==''?JSON[_0x2c9c10(0x443)](_0x2a416f[_0x509a73]):[],_0x47de5a=_0x2b3045[_0x2c9c10(0x419)](_0xae816d=>JSON[_0x2c9c10(0x443)](_0xae816d));break;case'FUNC':_0x47de5a=_0x2a416f[_0x509a73]!==''?new Function(JSON['parse'](_0x2a416f[_0x509a73])):new Function(_0x2c9c10(0x29d));break;case _0x2c9c10(0x366):_0x2b3045=_0x2a416f[_0x509a73]!==''?JSON['parse'](_0x2a416f[_0x509a73]):[],_0x47de5a=_0x2b3045['map'](_0xfca21b=>new Function(JSON[_0x2c9c10(0x443)](_0xfca21b)));break;case'STR':_0x47de5a=_0x2a416f[_0x509a73]!==''?String(_0x2a416f[_0x509a73]):'';break;case _0x2c9c10(0x1db):_0x2b3045=_0x2a416f[_0x509a73]!==''?JSON[_0x2c9c10(0x443)](_0x2a416f[_0x509a73]):[],_0x47de5a=_0x2b3045[_0x2c9c10(0x419)](_0x40b585=>String(_0x40b585));break;case _0x2c9c10(0x40c):_0x258aa4=_0x2a416f[_0x509a73]!==''?JSON['parse'](_0x2a416f[_0x509a73]):{},_0x3bb452[_0x4bb1f2]={},VisuMZ[_0x2c9c10(0x1f1)](_0x3bb452[_0x4bb1f2],_0x258aa4);continue;case _0x2c9c10(0x1f0):_0x2b3045=_0x2a416f[_0x509a73]!==''?JSON[_0x2c9c10(0x443)](_0x2a416f[_0x509a73]):[],_0x47de5a=_0x2b3045[_0x2c9c10(0x419)](_0x177b24=>VisuMZ[_0x2c9c10(0x1f1)]({},JSON[_0x2c9c10(0x443)](_0x177b24)));break;default:continue;}_0x3bb452[_0x4bb1f2]=_0x47de5a;}}return _0x3bb452;},(_0x409b49=>{const _0x34f237=_0x1d9b69,_0x3119a6=_0x409b49[_0x34f237(0x218)];for(const _0x1ab324 of dependencies){if(!Imported[_0x1ab324]){alert(_0x34f237(0xc4)['format'](_0x3119a6,_0x1ab324)),SceneManager[_0x34f237(0x233)]();break;}}const _0x43eaff=_0x409b49['description'];if(_0x43eaff[_0x34f237(0x356)](/\[Version[ ](.*?)\]/i)){const _0x237793=Number(RegExp['$1']);_0x237793!==VisuMZ[label][_0x34f237(0x2ad)]&&(alert(_0x34f237(0x151)[_0x34f237(0x13e)](_0x3119a6,_0x237793)),SceneManager[_0x34f237(0x233)]());}if(_0x43eaff[_0x34f237(0x356)](/\[Tier[ ](\d+)\]/i)){const _0x52df48=Number(RegExp['$1']);_0x52df48<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x34f237(0x13e)](_0x3119a6,_0x52df48,tier)),SceneManager[_0x34f237(0x233)]()):tier=Math[_0x34f237(0xef)](_0x52df48,tier);}VisuMZ[_0x34f237(0x1f1)](VisuMZ[label][_0x34f237(0x351)],_0x409b49[_0x34f237(0xc6)]);})(pluginData),PluginManager[_0x1d9b69(0x261)](pluginData[_0x1d9b69(0x218)],_0x1d9b69(0x3ab),_0x124bd1=>{const _0x37e1db=_0x1d9b69;VisuMZ[_0x37e1db(0x1f1)](_0x124bd1,_0x124bd1);const _0x42f559=_0x124bd1[_0x37e1db(0x134)][_0x37e1db(0x419)](_0x270ad5=>$gameActors[_0x37e1db(0x376)](_0x270ad5)),_0x2ae1bb=_0x124bd1[_0x37e1db(0xdf)][_0x37e1db(0x419)](_0x51a402=>$dataSystem['equipTypes']['indexOf'](_0x51a402[_0x37e1db(0x3a0)]()));for(const _0x27ca7e of _0x42f559){if(!_0x27ca7e)continue;_0x27ca7e[_0x37e1db(0xb7)](_0x2ae1bb);}}),PluginManager['registerCommand'](pluginData[_0x1d9b69(0x218)],_0x1d9b69(0x360),_0x14046d=>{const _0xcb956c=_0x1d9b69;VisuMZ[_0xcb956c(0x1f1)](_0x14046d,_0x14046d);const _0x323798=_0x14046d[_0xcb956c(0x134)]['map'](_0x212ee6=>$gameActors[_0xcb956c(0x376)](_0x212ee6));for(const _0x53ff1d of _0x323798){if(!_0x53ff1d)continue;_0x53ff1d['forceResetEquipSlots']();}}),PluginManager['registerCommand'](pluginData['name'],'BatchShop',_0x3a1337=>{const _0x1cfed8=_0x1d9b69;VisuMZ['ConvertParams'](_0x3a1337,_0x3a1337);const _0x581e3b=[],_0x1c57c1=_0x3a1337[_0x1cfed8(0xaf)][_0x1cfed8(0x419)](_0x3266cb=>_0x3266cb['toUpperCase']()[_0x1cfed8(0x3a0)]()),_0x5caefa=_0x3a1337[_0x1cfed8(0x2ba)][_0x1cfed8(0x419)](_0x984fce=>_0x984fce['toUpperCase']()[_0x1cfed8(0x3a0)]()),_0x372f3e=_0x3a1337[_0x1cfed8(0x3ea)]>=_0x3a1337[_0x1cfed8(0x215)]?_0x3a1337[_0x1cfed8(0x215)]:_0x3a1337[_0x1cfed8(0x3ea)],_0x3dc770=_0x3a1337[_0x1cfed8(0x3ea)]>=_0x3a1337[_0x1cfed8(0x215)]?_0x3a1337[_0x1cfed8(0x3ea)]:_0x3a1337[_0x1cfed8(0x215)],_0x187ee2=Array(_0x3dc770-_0x372f3e+0x1)[_0x1cfed8(0x34b)]()[_0x1cfed8(0x419)]((_0x2f243d,_0x28606e)=>_0x372f3e+_0x28606e);for(const _0x165969 of _0x187ee2){const _0xe990c4=$dataItems[_0x165969];if(!_0xe990c4)continue;if(!VisuMZ[_0x1cfed8(0x222)][_0x1cfed8(0x2b9)](_0xe990c4,_0x1c57c1,_0x5caefa))continue;_0x581e3b[_0x1cfed8(0xc3)]([0x0,_0x165969,0x0,_0xe990c4[_0x1cfed8(0xd0)]]);}const _0x26df52=_0x3a1337[_0x1cfed8(0x13c)]>=_0x3a1337[_0x1cfed8(0x338)]?_0x3a1337[_0x1cfed8(0x338)]:_0x3a1337[_0x1cfed8(0x13c)],_0x32d21c=_0x3a1337[_0x1cfed8(0x13c)]>=_0x3a1337[_0x1cfed8(0x338)]?_0x3a1337[_0x1cfed8(0x13c)]:_0x3a1337['Step2Start'],_0x407f18=Array(_0x32d21c-_0x26df52+0x1)[_0x1cfed8(0x34b)]()['map']((_0x44d152,_0x156492)=>_0x26df52+_0x156492);for(const _0x478b68 of _0x407f18){const _0x23c573=$dataWeapons[_0x478b68];if(!_0x23c573)continue;if(!VisuMZ[_0x1cfed8(0x222)][_0x1cfed8(0x2b9)](_0x23c573,_0x1c57c1,_0x5caefa))continue;_0x581e3b[_0x1cfed8(0xc3)]([0x1,_0x478b68,0x0,_0x23c573[_0x1cfed8(0xd0)]]);}const _0x1313d3=_0x3a1337[_0x1cfed8(0x159)]>=_0x3a1337[_0x1cfed8(0x220)]?_0x3a1337[_0x1cfed8(0x220)]:_0x3a1337['Step3End'],_0x3df673=_0x3a1337[_0x1cfed8(0x159)]>=_0x3a1337[_0x1cfed8(0x220)]?_0x3a1337[_0x1cfed8(0x159)]:_0x3a1337[_0x1cfed8(0x220)],_0x206219=Array(_0x3df673-_0x1313d3+0x1)[_0x1cfed8(0x34b)]()[_0x1cfed8(0x419)]((_0x1b4ba1,_0x40a214)=>_0x1313d3+_0x40a214);for(const _0x561470 of _0x206219){const _0x5f3326=$dataArmors[_0x561470];if(!_0x5f3326)continue;if(!VisuMZ[_0x1cfed8(0x222)][_0x1cfed8(0x2b9)](_0x5f3326,_0x1c57c1,_0x5caefa))continue;_0x581e3b[_0x1cfed8(0xc3)]([0x2,_0x561470,0x0,_0x5f3326[_0x1cfed8(0xd0)]]);}SceneManager['push'](Scene_Shop),SceneManager['prepareNextScene'](_0x581e3b,_0x3a1337['PurchaseOnly']);}),VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2b9)]=function(_0x32a680,_0xb583cb,_0x368ed3){const _0x19e04e=_0x1d9b69;if(_0x32a680[_0x19e04e(0x218)][_0x19e04e(0x3a0)]()==='')return![];if(_0x32a680[_0x19e04e(0x218)][_0x19e04e(0x356)](/-----/i))return![];const _0x14b948=_0x32a680[_0x19e04e(0x212)];if(_0xb583cb['length']>0x0)for(const _0x50fa3a of _0xb583cb){if(!_0x50fa3a)continue;if(_0x14b948[_0x19e04e(0x22a)](_0x50fa3a))return![];}if(_0x368ed3[_0x19e04e(0x440)]>0x0){for(const _0x21b1b5 of _0x368ed3){if(!_0x21b1b5)continue;if(_0x14b948[_0x19e04e(0x22a)](_0x21b1b5))return!![];}return![];}return!![];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0xe7)]=Scene_Boot[_0x1d9b69(0x199)][_0x1d9b69(0x2e4)],Scene_Boot[_0x1d9b69(0x199)][_0x1d9b69(0x2e4)]=function(){const _0xefcdd7=_0x1d9b69;this['process_VisuMZ_ItemsEquipsCore_RegExp'](),VisuMZ[_0xefcdd7(0x222)][_0xefcdd7(0xe7)][_0xefcdd7(0x422)](this),this[_0xefcdd7(0x3ca)](),VisuMZ['ItemsEquipsCore']['SetupProxyItemGroups']();},Scene_Boot['prototype'][_0x1d9b69(0x2c2)]=function(){const _0x216980=_0x1d9b69;VisuMZ[_0x216980(0x222)][_0x216980(0x23c)]={},VisuMZ[_0x216980(0x222)][_0x216980(0x23c)][_0x216980(0x42c)]=[],VisuMZ['ItemsEquipsCore'][_0x216980(0x23c)][_0x216980(0x3b0)]=[];const _0x1027a2=['MaxHP','MaxMP',_0x216980(0x1eb),'DEF',_0x216980(0x325),_0x216980(0x2b7),'AGI',_0x216980(0x263)];for(const _0x2d3893 of _0x1027a2){const _0x206849=_0x216980(0x3fc)['format'](_0x2d3893);VisuMZ['ItemsEquipsCore'][_0x216980(0x23c)][_0x216980(0x42c)][_0x216980(0xc3)](new RegExp(_0x206849,'i'));const _0x1c85ed=_0x216980(0x30c)[_0x216980(0x13e)](_0x2d3893);VisuMZ['ItemsEquipsCore'][_0x216980(0x23c)][_0x216980(0x3b0)][_0x216980(0xc3)](new RegExp(_0x1c85ed,'g'));}},Scene_Boot['prototype'][_0x1d9b69(0x3ca)]=function(){const _0x404532=_0x1d9b69;if(VisuMZ[_0x404532(0x40a)])return;this[_0x404532(0x37d)]();const _0x3a2c6c=[$dataItems,$dataWeapons,$dataArmors];for(const _0x48e73e of _0x3a2c6c){for(const _0x3a1156 of _0x48e73e){if(!_0x3a1156)continue;VisuMZ['ItemsEquipsCore'][_0x404532(0x11a)](_0x3a1156,_0x48e73e),VisuMZ[_0x404532(0x222)][_0x404532(0x172)](_0x3a1156,_0x48e73e),VisuMZ['ItemsEquipsCore'][_0x404532(0x2de)](_0x3a1156,_0x48e73e),VisuMZ['ItemsEquipsCore'][_0x404532(0x119)](_0x3a1156,_0x48e73e),VisuMZ[_0x404532(0x222)][_0x404532(0x237)](_0x3a1156,_0x48e73e);}}},Scene_Boot[_0x1d9b69(0x199)]['process_VisuMZ_ItemsEquipsCore_EquipSlots']=function(){const _0x5ee8ab=_0x1d9b69;for(const _0xe8e9fb of $dataClasses){if(!_0xe8e9fb)continue;VisuMZ['ItemsEquipsCore'][_0x5ee8ab(0x3c4)](_0xe8e9fb);}},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x39a)]=VisuMZ[_0x1d9b69(0x39a)],VisuMZ[_0x1d9b69(0x39a)]=function(_0x1b818f){const _0x1825fd=_0x1d9b69;VisuMZ['ItemsEquipsCore'][_0x1825fd(0x39a)][_0x1825fd(0x422)](this,_0x1b818f),VisuMZ[_0x1825fd(0x222)][_0x1825fd(0x3c4)](_0x1b818f);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x36c)]=VisuMZ[_0x1d9b69(0x36c)],VisuMZ[_0x1d9b69(0x36c)]=function(_0xec71a5){const _0x206eb3=_0x1d9b69;VisuMZ[_0x206eb3(0x222)]['ParseItemNotetags'][_0x206eb3(0x422)](this,_0xec71a5),VisuMZ[_0x206eb3(0x222)]['Parse_Notetags_Batch'](_0xec71a5,$dataItems);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x195)]=VisuMZ[_0x1d9b69(0x195)],VisuMZ[_0x1d9b69(0x195)]=function(_0x355918){const _0x53ed02=_0x1d9b69;VisuMZ[_0x53ed02(0x222)][_0x53ed02(0x195)][_0x53ed02(0x422)](this,_0x355918),VisuMZ['ItemsEquipsCore'][_0x53ed02(0x1cf)](_0x355918,$dataWeapons);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x362)]=VisuMZ[_0x1d9b69(0x362)],VisuMZ['ParseArmorNotetags']=function(_0x160cc3){const _0x1b30e6=_0x1d9b69;VisuMZ[_0x1b30e6(0x222)][_0x1b30e6(0x362)]['call'](this,_0x160cc3),VisuMZ[_0x1b30e6(0x222)][_0x1b30e6(0x1cf)](_0x160cc3,$dataArmors);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x3c4)]=function(_0x1afee2){const _0x1b3e5c=_0x1d9b69;_0x1afee2[_0x1b3e5c(0xd4)]=[];if(!BattleManager[_0x1b3e5c(0x10f)]()&&_0x1afee2[_0x1b3e5c(0x3dc)][_0x1b3e5c(0x356)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0xbcf23e=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x29c78f of _0xbcf23e){const _0x39cb00=$dataSystem[_0x1b3e5c(0x455)][_0x1b3e5c(0x436)](_0x29c78f[_0x1b3e5c(0x3a0)]());if(_0x39cb00>0x0)_0x1afee2[_0x1b3e5c(0xd4)][_0x1b3e5c(0xc3)](_0x39cb00);}}else for(const _0x5a3cfe of $dataSystem[_0x1b3e5c(0x455)]){const _0x19ab01=$dataSystem[_0x1b3e5c(0x455)][_0x1b3e5c(0x436)](_0x5a3cfe[_0x1b3e5c(0x3a0)]());if(_0x19ab01>0x0)_0x1afee2[_0x1b3e5c(0xd4)][_0x1b3e5c(0xc3)](_0x19ab01);}},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x1cf)]=function(_0x22651d,_0x50a7b2){const _0x3583a0=_0x1d9b69;VisuMZ[_0x3583a0(0x222)][_0x3583a0(0x11a)](_0x22651d,_0x50a7b2),VisuMZ[_0x3583a0(0x222)][_0x3583a0(0x172)](_0x22651d,_0x50a7b2),VisuMZ[_0x3583a0(0x222)][_0x3583a0(0x2de)](_0x22651d,_0x50a7b2),VisuMZ[_0x3583a0(0x222)][_0x3583a0(0x119)](_0x22651d,_0x50a7b2),VisuMZ[_0x3583a0(0x222)][_0x3583a0(0x237)](_0x22651d,_0x50a7b2);},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x11a)]=function(_0x1a7081,_0x1ec494){const _0x1b4756=_0x1d9b69;_0x1a7081[_0x1b4756(0x212)]=[];const _0x1c6488=_0x1a7081[_0x1b4756(0x3dc)],_0x3900ed=_0x1c6488[_0x1b4756(0x356)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x3900ed)for(const _0x49d96b of _0x3900ed){_0x49d96b['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x4de6b6=String(RegExp['$1'])[_0x1b4756(0x20d)]()['trim']()['split'](',');for(const _0x596005 of _0x4de6b6){_0x1a7081[_0x1b4756(0x212)][_0x1b4756(0xc3)](_0x596005[_0x1b4756(0x3a0)]());}}if(_0x1c6488[_0x1b4756(0x356)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x36a1c3=RegExp['$1'][_0x1b4756(0x26c)](/[\r\n]+/);for(const _0x14ff2d of _0x36a1c3){_0x1a7081[_0x1b4756(0x212)][_0x1b4756(0xc3)](_0x14ff2d[_0x1b4756(0x20d)]()[_0x1b4756(0x3a0)]());}}},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x172)]=function(_0x4ba07b,_0x2fdba0){const _0x43b30e=_0x1d9b69;_0x4ba07b[_0x43b30e(0x3dc)][_0x43b30e(0x356)](/<PRICE:[ ](\d+)>/i)&&(_0x4ba07b[_0x43b30e(0xd0)]=Number(RegExp['$1']));},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2de)]=function(_0x10c81f,_0xc283a5){const _0x546dfa=_0x1d9b69;if(_0xc283a5===$dataItems)return;for(let _0x296734=0x0;_0x296734<0x8;_0x296734++){const _0x17622e=VisuMZ[_0x546dfa(0x222)][_0x546dfa(0x23c)][_0x546dfa(0x42c)][_0x296734];_0x10c81f['note'][_0x546dfa(0x356)](_0x17622e)&&(_0x10c81f['params'][_0x296734]=parseInt(RegExp['$1']));}},VisuMZ[_0x1d9b69(0x222)]['paramJS']={},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x119)]=function(_0xd5dd8e,_0xb618f3){const _0x59d8fb=_0x1d9b69;if(_0xb618f3===$dataItems)return;if(_0xd5dd8e[_0x59d8fb(0x3dc)][_0x59d8fb(0x356)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x1f39d1=String(RegExp['$1']),_0x871c01=(_0xb618f3===$dataWeapons?_0x59d8fb(0x19c):_0x59d8fb(0x240))[_0x59d8fb(0x13e)](_0xd5dd8e['id']),_0x11becd='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'[_0x59d8fb(0x13e)](_0x1f39d1);for(let _0x14cc50=0x0;_0x14cc50<0x8;_0x14cc50++){if(_0x1f39d1[_0x59d8fb(0x356)](VisuMZ[_0x59d8fb(0x222)][_0x59d8fb(0x23c)][_0x59d8fb(0x3b0)][_0x14cc50])){const _0x416598='%1-%2'[_0x59d8fb(0x13e)](_0x871c01,_0x14cc50);VisuMZ[_0x59d8fb(0x222)]['paramJS'][_0x416598]=new Function(_0x59d8fb(0x158),_0x59d8fb(0x2ed),_0x11becd);}}}},VisuMZ['ItemsEquipsCore']['itemEnableJS']={},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x237)]=function(_0x19a090,_0x3b34fa){const _0x12fda4=_0x1d9b69;if(_0x3b34fa!==$dataItems)return;if(_0x19a090[_0x12fda4(0x3dc)][_0x12fda4(0x356)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x3a9ceb=String(RegExp['$1']),_0x491e1c=_0x12fda4(0x178)[_0x12fda4(0x13e)](_0x3a9ceb);VisuMZ[_0x12fda4(0x222)]['itemEnableJS'][_0x19a090['id']]=new Function(_0x12fda4(0x158),_0x491e1c);}},DataManager['isKeyItem']=function(_0x22e9d1){const _0x297227=_0x1d9b69;return this[_0x297227(0x345)](_0x22e9d1)&&_0x22e9d1[_0x297227(0x2cf)]===0x2;},DataManager[_0x1d9b69(0x403)]=function(_0x143c03){const _0x481828=_0x1d9b69;if(!_0x143c03)return 0x63;else return _0x143c03[_0x481828(0x3dc)][_0x481828(0x356)](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0x481828(0xc2)](_0x143c03);},DataManager[_0x1d9b69(0xc2)]=function(_0x190f7e){const _0x2ecfdb=_0x1d9b69;if(this[_0x2ecfdb(0x345)](_0x190f7e))return VisuMZ[_0x2ecfdb(0x222)][_0x2ecfdb(0x351)]['ItemScene'][_0x2ecfdb(0x16a)];else{if(this[_0x2ecfdb(0x33d)](_0x190f7e))return VisuMZ['ItemsEquipsCore']['Settings']['ItemScene'][_0x2ecfdb(0x268)];else{if(this[_0x2ecfdb(0x2d3)](_0x190f7e))return VisuMZ['ItemsEquipsCore'][_0x2ecfdb(0x351)]['ItemScene'][_0x2ecfdb(0x17a)];}}},DataManager['getClassIdWithName']=function(_0x1e0b77){const _0x5edfa0=_0x1d9b69;_0x1e0b77=_0x1e0b77[_0x5edfa0(0x20d)]()[_0x5edfa0(0x3a0)](),this['_classIDs']=this['_classIDs']||{};if(this[_0x5edfa0(0x3a9)][_0x1e0b77])return this['_classIDs'][_0x1e0b77];for(const _0x19a637 of $dataClasses){if(!_0x19a637)continue;let _0x59fc19=_0x19a637[_0x5edfa0(0x218)];_0x59fc19=_0x59fc19[_0x5edfa0(0x2a3)](/\x1I\[(\d+)\]/gi,''),_0x59fc19=_0x59fc19[_0x5edfa0(0x2a3)](/\\I\[(\d+)\]/gi,''),this[_0x5edfa0(0x3a9)][_0x59fc19[_0x5edfa0(0x20d)]()[_0x5edfa0(0x3a0)]()]=_0x19a637['id'];}return this[_0x5edfa0(0x3a9)][_0x1e0b77]||0x0;},DataManager[_0x1d9b69(0x431)]=function(_0x338dc4){const _0x3359c0=_0x1d9b69;_0x338dc4=_0x338dc4[_0x3359c0(0x20d)]()[_0x3359c0(0x3a0)](),this[_0x3359c0(0x3e6)]=this[_0x3359c0(0x3e6)]||{};if(this[_0x3359c0(0x3e6)][_0x338dc4])return this[_0x3359c0(0x3e6)][_0x338dc4];for(const _0x1fbdc2 of $dataSkills){if(!_0x1fbdc2)continue;this['_skillIDs'][_0x1fbdc2['name'][_0x3359c0(0x20d)]()[_0x3359c0(0x3a0)]()]=_0x1fbdc2['id'];}return this['_skillIDs'][_0x338dc4]||0x0;},DataManager['getItemIdWithName']=function(_0x4ffd46){const _0x1affdf=_0x1d9b69;_0x4ffd46=_0x4ffd46[_0x1affdf(0x20d)]()['trim'](),this['_itemIDs']=this[_0x1affdf(0x3c5)]||{};if(this[_0x1affdf(0x3c5)][_0x4ffd46])return this[_0x1affdf(0x3c5)][_0x4ffd46];for(const _0x10ea6c of $dataItems){if(!_0x10ea6c)continue;this[_0x1affdf(0x3c5)][_0x10ea6c[_0x1affdf(0x218)][_0x1affdf(0x20d)]()['trim']()]=_0x10ea6c['id'];}return this[_0x1affdf(0x3c5)][_0x4ffd46]||0x0;},DataManager['getWeaponIdWithName']=function(_0x5cfbf2){const _0x5dd59e=_0x1d9b69;_0x5cfbf2=_0x5cfbf2[_0x5dd59e(0x20d)]()[_0x5dd59e(0x3a0)](),this[_0x5dd59e(0xdd)]=this[_0x5dd59e(0xdd)]||{};if(this[_0x5dd59e(0xdd)][_0x5cfbf2])return this[_0x5dd59e(0xdd)][_0x5cfbf2];for(const _0x4eb573 of $dataWeapons){if(!_0x4eb573)continue;this['_weaponIDs'][_0x4eb573[_0x5dd59e(0x218)][_0x5dd59e(0x20d)]()[_0x5dd59e(0x3a0)]()]=_0x4eb573['id'];}return this['_weaponIDs'][_0x5cfbf2]||0x0;},DataManager['getArmorIdWithName']=function(_0x18578b){const _0x47b079=_0x1d9b69;_0x18578b=_0x18578b['toUpperCase']()[_0x47b079(0x3a0)](),this[_0x47b079(0x407)]=this[_0x47b079(0x407)]||{};if(this[_0x47b079(0x407)][_0x18578b])return this[_0x47b079(0x407)][_0x18578b];for(const _0x45436d of $dataArmors){if(!_0x45436d)continue;this[_0x47b079(0x407)][_0x45436d[_0x47b079(0x218)][_0x47b079(0x20d)]()[_0x47b079(0x3a0)]()]=_0x45436d['id'];}return this['_armorIDs'][_0x18578b]||0x0;},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0xff)]=function(){const _0x5d0926=_0x1d9b69;VisuMZ[_0x5d0926(0x222)]['SetupProxyItemGroup']($dataItems),VisuMZ['ItemsEquipsCore'][_0x5d0926(0x279)]($dataWeapons),VisuMZ[_0x5d0926(0x222)]['SetupProxyItemGroup']($dataArmors);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x279)]=function(_0x3ed4ac){const _0x46b6e8=_0x1d9b69;for(const _0x1afad1 of _0x3ed4ac){if(!_0x1afad1)continue;if(!DataManager[_0x46b6e8(0x103)](_0x1afad1))continue;const _0x2c1057=DataManager[_0x46b6e8(0xd7)](_0x1afad1),_0x4caf8d=[_0x46b6e8(0x218),_0x46b6e8(0x318),_0x46b6e8(0x298)];for(const _0xcf34e8 of _0x4caf8d){_0x1afad1[_0xcf34e8]=_0x2c1057[_0xcf34e8];}}},DataManager[_0x1d9b69(0x103)]=function(_0x98316d){const _0x4c77f3=_0x1d9b69;if(!_0x98316d)return![];if(!_0x98316d[_0x4c77f3(0x3dc)])return![];return _0x98316d&&_0x98316d[_0x4c77f3(0x3dc)][_0x4c77f3(0x356)](/<PROXY:[ ](.*)>/i);},DataManager[_0x1d9b69(0xd7)]=function(_0x3e902d){const _0x5bcebe=_0x1d9b69;return this[_0x5bcebe(0x103)](_0x3e902d)?this['switchProxyItem'](_0x3e902d)||_0x3e902d:_0x3e902d;},DataManager[_0x1d9b69(0x229)]=function(_0x3a95be){const _0x1f29b1=_0x1d9b69;_0x3a95be[_0x1f29b1(0x3dc)]['match'](/<PROXY:[ ](.*)>/i);const _0x19a5ad=RegExp['$1']['trim'](),_0x1e73bb=/^\d+$/['test'](_0x19a5ad);if(this[_0x1f29b1(0x345)](_0x3a95be)){const _0x1ed8d6=_0x1e73bb?Number(RegExp['$1']):DataManager[_0x1f29b1(0x19a)](_0x19a5ad);return $dataItems[_0x1ed8d6]||_0x3a95be;}else{if(this[_0x1f29b1(0x33d)](_0x3a95be)){const _0x4f1ff8=_0x1e73bb?Number(RegExp['$1']):DataManager[_0x1f29b1(0x24b)](_0x19a5ad);return $dataWeapons[_0x4f1ff8]||_0x3a95be;}else{if(this[_0x1f29b1(0x2d3)](_0x3a95be)){const _0x108d71=_0x1e73bb?Number(RegExp['$1']):DataManager['getArmorIdWithName'](_0x19a5ad);return $dataArmors[_0x108d71]||_0x3a95be;}}}return _0x3a95be;},VisuMZ[_0x1d9b69(0x222)]['Window_ItemList_item']=Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x158)],Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x158)]=function(){const _0x31fc05=_0x1d9b69;if($gameTemp[_0x31fc05(0xf1)])return VisuMZ[_0x31fc05(0x222)][_0x31fc05(0x165)][_0x31fc05(0x422)](this);return DataManager[_0x31fc05(0xd7)](VisuMZ[_0x31fc05(0x222)][_0x31fc05(0x165)][_0x31fc05(0x422)](this));},Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x1b0)]=function(){const _0x4b0ee4=_0x1d9b69;return VisuMZ[_0x4b0ee4(0x222)]['Window_ItemList_item'][_0x4b0ee4(0x422)](this);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x300)]=Window_ShopBuy[_0x1d9b69(0x199)][_0x1d9b69(0x158)],Window_ShopBuy[_0x1d9b69(0x199)][_0x1d9b69(0x158)]=function(){const _0x44437b=_0x1d9b69;if($gameTemp['_bypassProxy'])return VisuMZ[_0x44437b(0x222)][_0x44437b(0x300)]['call'](this);return DataManager['getProxyItem'](VisuMZ[_0x44437b(0x222)][_0x44437b(0x300)][_0x44437b(0x422)](this));},Window_ShopBuy[_0x1d9b69(0x199)][_0x1d9b69(0x1b0)]=function(){const _0x4df216=_0x1d9b69;return VisuMZ[_0x4df216(0x222)][_0x4df216(0x300)][_0x4df216(0x422)](this);},VisuMZ[_0x1d9b69(0x222)]['Window_ShopStatus_setItem']=Window_ShopStatus['prototype'][_0x1d9b69(0x413)],Window_ShopStatus['prototype'][_0x1d9b69(0x413)]=function(_0x23a7e2){const _0x59bcae=_0x1d9b69;_0x23a7e2=DataManager[_0x59bcae(0xd7)](_0x23a7e2),VisuMZ['ItemsEquipsCore'][_0x59bcae(0x33c)][_0x59bcae(0x422)](this,_0x23a7e2);},VisuMZ[_0x1d9b69(0x222)]['Game_Item_setObject']=Game_Item['prototype']['setObject'],Game_Item[_0x1d9b69(0x199)][_0x1d9b69(0x3ef)]=function(_0x54ca71){const _0x57e18f=_0x1d9b69;if(DataManager[_0x57e18f(0x103)](_0x54ca71))return;VisuMZ['ItemsEquipsCore']['Game_Item_setObject'][_0x57e18f(0x422)](this,_0x54ca71);},DataManager['isArtifact']=function(_0x4a57e5){const _0x5903af=_0x1d9b69;if(!this['isArmor'](_0x4a57e5))return![];const _0x10adb7=_0x4a57e5['note'];if(!_0x10adb7)return![];if(_0x10adb7['match'](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x10adb7['match'](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x10adb7[_0x5903af(0x356)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x10adb7[_0x5903af(0x356)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x1d9b69(0x3f6)]=function(_0x1fc041){const _0x531c2e=_0x1d9b69;if(!this[_0x531c2e(0x32c)](_0x1fc041))return![];const _0x5b3521=_0x1fc041['note'];if(!_0x5b3521)return![];if(_0x5b3521[_0x531c2e(0x356)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x5b3521[_0x531c2e(0x356)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager['isPartyArtifact']=function(_0x13098a){const _0x139fc0=_0x1d9b69;if(!this[_0x139fc0(0x32c)](_0x13098a))return![];const _0x422335=_0x13098a[_0x139fc0(0x3dc)];if(!_0x422335)return![];if(_0x422335['match'](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x422335['match'](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager['isTroopArtifact']=function(_0x30d872){const _0x2bf355=_0x1d9b69;if(!this['isArtifact'](_0x30d872))return![];const _0x2e8edc=_0x30d872[_0x2bf355(0x3dc)];if(!_0x2e8edc)return![];if(_0x2e8edc[_0x2bf355(0x356)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x2e8edc['match'](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x3cf)]=Game_BattlerBase[_0x1d9b69(0x199)][_0x1d9b69(0x44e)],Game_BattlerBase[_0x1d9b69(0x199)][_0x1d9b69(0x44e)]=function(_0x5af922){const _0x50980a=_0x1d9b69;if(DataManager[_0x50980a(0x32c)](_0x5af922))return![];if(!DataManager[_0x50980a(0x17b)](this,_0x5af922))return![];if(!DataManager['meetsEquipRequirements'](this,_0x5af922))return![];return VisuMZ[_0x50980a(0x222)][_0x50980a(0x3cf)][_0x50980a(0x422)](this,_0x5af922);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x425)]=Game_BattlerBase[_0x1d9b69(0x199)]['param'],Game_BattlerBase[_0x1d9b69(0x199)]['param']=function(_0x8fc46e){const _0xc49260=_0x1d9b69;this['_allowArtifactParamBase']=!![];const _0x31999a=VisuMZ[_0xc49260(0x222)][_0xc49260(0x425)]['call'](this,_0x8fc46e);return this['_allowArtifactParamBase']=undefined,_0x31999a;},VisuMZ['ItemsEquipsCore']['Game_Actor_artifact']=Game_Actor['prototype']['traitObjects'],Game_Actor[_0x1d9b69(0x199)]['traitObjects']=function(){const _0x4ef1b9=_0x1d9b69;this[_0x4ef1b9(0x33a)]=!![];const _0x3ef649=VisuMZ['ItemsEquipsCore']['Game_Actor_artifact']['call'](this);return this[_0x4ef1b9(0x33a)]=undefined,_0x3ef649;},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2cc)]=Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x146)],Game_Actor['prototype'][_0x1d9b69(0x146)]=function(){const _0x706b63=_0x1d9b69,_0x44a867=VisuMZ[_0x706b63(0x222)][_0x706b63(0x2cc)][_0x706b63(0x422)](this);if(this[_0x706b63(0x33a)]||this[_0x706b63(0x447)]){const _0x13ae71=_0x44a867[_0x706b63(0x214)]($gameParty['partyArtifacts']());return _0x13ae71;}else return _0x44a867;},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x283)]=Game_BattlerBase['prototype'][_0x1d9b69(0x282)],Game_BattlerBase[_0x1d9b69(0x199)]['paramPlus']=function(_0xd30a3a){const _0x375632=_0x1d9b69;let _0x10c0bb=VisuMZ[_0x375632(0x222)]['Game_BattlerBase_paramPlus_artifact'][_0x375632(0x422)](this,_0xd30a3a);if(this['constructor']===Game_Enemy)for(const _0x298c56 of $gameParty[_0x375632(0x3af)]()){if(_0x298c56)_0x10c0bb+=_0x298c56['params'][_0xd30a3a];}return _0x10c0bb;},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x278)]=Game_Enemy[_0x1d9b69(0x199)][_0x1d9b69(0x20c)],Game_Enemy[_0x1d9b69(0x199)][_0x1d9b69(0x20c)]=function(){const _0x2dc930=_0x1d9b69;let _0x19261b=VisuMZ[_0x2dc930(0x222)][_0x2dc930(0x278)]['call'](this);return _0x19261b[_0x2dc930(0x214)]($gameParty[_0x2dc930(0x3af)]());},VisuMZ[_0x1d9b69(0x222)]['Game_Party_gainItem_artifact']=Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x2da)],Game_Party['prototype'][_0x1d9b69(0x2da)]=function(_0x1ab3d6,_0x261aa4,_0x4d38b8){const _0x36c0a4=_0x1d9b69;VisuMZ['ItemsEquipsCore'][_0x36c0a4(0x308)][_0x36c0a4(0x422)](this,_0x1ab3d6,_0x261aa4,_0x4d38b8);if(DataManager['isArtifact'](_0x1ab3d6)){let _0x56cf37=$gameParty[_0x36c0a4(0xc1)]();if($gameParty[_0x36c0a4(0x32e)]())_0x56cf37=_0x56cf37[_0x36c0a4(0x214)]($gameTroop[_0x36c0a4(0x182)]());for(const _0x11c638 of _0x56cf37){if(!_0x11c638)continue;_0x11c638[_0x36c0a4(0x16d)]={};}}},Game_Party['prototype'][_0x1d9b69(0x1e3)]=function(){const _0x514e58=_0x1d9b69;let _0x26a254=[];for(const _0x4290b6 of this['armors']()){if(!_0x4290b6)continue;if(!DataManager[_0x514e58(0x32c)](_0x4290b6))continue;if(!DataManager[_0x514e58(0x315)](_0x4290b6))continue;let _0x3e47a1=0x1;if(DataManager[_0x514e58(0x3f6)](_0x4290b6))_0x3e47a1=this[_0x514e58(0x2d5)](_0x4290b6);while(_0x3e47a1--)_0x26a254[_0x514e58(0xc3)](_0x4290b6);}return _0x26a254;},Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x3af)]=function(){const _0x20913e=_0x1d9b69;let _0x1acb74=[];for(const _0x284c83 of this['armors']()){if(!_0x284c83)continue;if(!DataManager['isArtifact'](_0x284c83))continue;if(!DataManager[_0x20913e(0x2be)](_0x284c83))continue;let _0x42b9e7=0x1;if(DataManager['isStackableArtifact'](_0x284c83))_0x42b9e7=this[_0x20913e(0x2d5)](_0x284c83);while(_0x42b9e7--)_0x1acb74[_0x20913e(0xc3)](_0x284c83);}return _0x1acb74;},Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x25d)]=function(){const _0x3ddb47=_0x1d9b69;return this[_0x3ddb47(0x1e3)]()[_0x3ddb47(0x214)](this[_0x3ddb47(0x3af)]());},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x3db)]=Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0xe1)],Game_Party[_0x1d9b69(0x199)]['setupBattleTestItems']=function(){const _0x7a1735=_0x1d9b69;VisuMZ[_0x7a1735(0x222)][_0x7a1735(0x3db)][_0x7a1735(0x422)](this),this[_0x7a1735(0x2c1)]();},Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x2c1)]=function(){const _0x4ed661=_0x1d9b69,_0x5a6d7d=$gameParty[_0x4ed661(0x274)]()['filter'](_0xab73eb=>DataManager[_0x4ed661(0x32c)](_0xab73eb));for(const _0x55a869 of _0x5a6d7d){const _0x7e1de=this[_0x4ed661(0x2d5)](_0x55a869);if(_0x7e1de)this[_0x4ed661(0x1a1)](_0x55a869,_0x7e1de);}},DataManager[_0x1d9b69(0x17b)]=function(_0x6bc746,_0x5cdc80){const _0x2c8f17=_0x1d9b69;if(this['isItem'](_0x5cdc80))return![];if(!_0x6bc746)return![];if($gameTemp[_0x2c8f17(0x34a)])return!![];if(BattleManager['isBattleTest']())return!![];const _0x5b089f=this['getClassRequirements'](_0x5cdc80);if(_0x5b089f[_0x2c8f17(0x440)]<=0x0)return!![];return _0x5b089f['includes'](_0x6bc746[_0x2c8f17(0x3b5)]()['id']);},DataManager[_0x1d9b69(0x118)]=function(_0x3bbf01){const _0x14679c=_0x1d9b69;if(!_0x3bbf01)return[];this[_0x14679c(0x129)]=this[_0x14679c(0x129)]||{};const _0x6812f1='%1-%2'['format'](this[_0x14679c(0x33d)](_0x3bbf01)?'WEAPON':_0x14679c(0x1bf),_0x3bbf01['id']);if(this[_0x14679c(0x129)][_0x6812f1]!==undefined)return this['_getClassRequirements'][_0x6812f1];let _0x322337=[];const _0x33af9a=_0x3bbf01[_0x14679c(0x3dc)]||'';if(_0x33af9a['match'](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0x1a69db=String(RegExp['$1'])['split'](',')[_0x14679c(0x419)](_0x1d60f0=>_0x1d60f0[_0x14679c(0x3a0)]());for(const _0x4c0949 of _0x1a69db){const _0x4e0e53=/^\d+$/['test'](_0x4c0949);_0x4e0e53?_0x322337['push'](Number(_0x4c0949)):_0x322337[_0x14679c(0xc3)](DataManager[_0x14679c(0xe4)](_0x4c0949));}}return this[_0x14679c(0x129)][_0x6812f1]=_0x322337,this[_0x14679c(0x129)][_0x6812f1];},DataManager[_0x1d9b69(0x328)]=function(_0x159184,_0x4b6bbd){const _0x4b1150=_0x1d9b69;if(this[_0x4b1150(0x345)](_0x4b6bbd))return![];if(!_0x159184)return![];if($gameTemp['_checkEquipRequirements'])return!![];if(BattleManager[_0x4b1150(0x10f)]())return!![];const _0x7892a=this['getEquipRequirements'](_0x4b6bbd);for(const _0x1bf5a7 of _0x7892a){if(!this[_0x4b1150(0x32a)](_0x159184,_0x1bf5a7))return![];}return!![];},DataManager['getEquipRequirements']=function(_0x46c516){const _0x1016d0=_0x1d9b69;if(!_0x46c516)return[];this[_0x1016d0(0xee)]=this['_getEquipRequirements']||{};const _0x1d4be2=_0x1016d0(0x41f)[_0x1016d0(0x13e)](this[_0x1016d0(0x33d)](_0x46c516)?_0x1016d0(0x415):_0x1016d0(0x1bf),_0x46c516['id']);if(this[_0x1016d0(0xee)][_0x1d4be2]!==undefined)return this['_getEquipRequirements'][_0x1d4be2];let _0x3791f3=[];const _0x552b35=_0x46c516[_0x1016d0(0x3dc)]||'';return _0x552b35[_0x1016d0(0x356)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x3791f3=String(RegExp['$1'])['split'](/[\r\n]+/)),this['_getEquipRequirements'][_0x1d4be2]=_0x3791f3,this['_getEquipRequirements'][_0x1d4be2];},DataManager[_0x1d9b69(0x32a)]=function(_0x444ab9,_0x167c3b){const _0x500428=_0x1d9b69;if(_0x167c3b[_0x500428(0x356)](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x3058b1=String(RegExp['$1'])[_0x500428(0x3a0)](),_0x4139cf=Number(RegExp['$2']);switch(_0x3058b1){case'>':return _0x444ab9[_0x500428(0x121)]>_0x4139cf;case'>=':return _0x444ab9['level']>=_0x4139cf;case _0x500428(0x14a):return _0x444ab9[_0x500428(0x121)]===_0x4139cf;case'<=':return _0x444ab9[_0x500428(0x121)]<=_0x4139cf;case'<':return _0x444ab9[_0x500428(0x121)]<_0x4139cf;}return![];}if(_0x167c3b['match'](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x363730=String(RegExp['$1'])['toLowerCase']()[_0x500428(0x3a0)](),_0x40b544=String(RegExp['$2'])[_0x500428(0x3a0)](),_0x456ce1=Number(RegExp['$3']);let _0x4164e2=0x0;if(['maxmp',_0x500428(0x17f)][_0x500428(0x22a)](_0x363730))_0x4164e2=0x1;const _0x4e5398=_0x444ab9[_0x500428(0x34d)][_0x4164e2]||0x0;switch(_0x40b544){case'>':return _0x444ab9[_0x500428(0x1d4)](_0x4164e2)+_0x4e5398>_0x456ce1;case'>=':return _0x444ab9[_0x500428(0x1d4)](_0x4164e2)+_0x4e5398>=_0x456ce1;case'===':return _0x444ab9['paramBase'](_0x4164e2)+_0x4e5398===_0x456ce1;case'<=':return _0x444ab9['paramBase'](_0x4164e2)+_0x4e5398<=_0x456ce1;case'<':return _0x444ab9[_0x500428(0x1d4)](_0x4164e2)+_0x4e5398<_0x456ce1;}return![];}if(_0x167c3b['match'](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x97112c=String(RegExp['$1'])['toLowerCase']()[_0x500428(0x3a0)](),_0x4f81a9=String(RegExp['$2'])['trim'](),_0x11e18b=Number(RegExp['$3']),_0x401c37=['atk',_0x500428(0x442),'mat',_0x500428(0x11e),_0x500428(0x346),_0x500428(0x2ec)];let _0x38e0f3=_0x401c37['indexOf'](_0x97112c)+0x2;if(_0x38e0f3<0x2)return![];const _0x3d52c6=_0x444ab9[_0x500428(0x34d)][_0x38e0f3]||0x0;switch(_0x4f81a9){case'>':return _0x444ab9[_0x500428(0x1d4)](_0x38e0f3)+_0x3d52c6>_0x11e18b;case'>=':return _0x444ab9[_0x500428(0x1d4)](_0x38e0f3)+_0x3d52c6>=_0x11e18b;case'===':return _0x444ab9[_0x500428(0x1d4)](_0x38e0f3)+_0x3d52c6===_0x11e18b;case'<=':return _0x444ab9[_0x500428(0x1d4)](_0x38e0f3)+_0x3d52c6<=_0x11e18b;case'<':return _0x444ab9[_0x500428(0x1d4)](_0x38e0f3)+_0x3d52c6<_0x11e18b;}return![];}if(_0x167c3b[_0x500428(0x356)](/LEARNED SKILL:[ ](\d+)/i)){const _0x46d720=Number(RegExp['$1']);return _0x444ab9[_0x500428(0x3cc)](_0x46d720);}else{if(_0x167c3b[_0x500428(0x356)](/LEARNED SKILL:[ ](.*)/i)){const _0x117dbb=String(RegExp['$1']),_0xd4c6b8=this['getSkillIdWithName'](_0x117dbb);return _0x444ab9[_0x500428(0x3cc)](_0xd4c6b8);}}if(_0x167c3b[_0x500428(0x356)](/SWITCH:[ ](\d+)/i)){const _0x4310fb=Number(RegExp['$1']);return $gameSwitches[_0x500428(0x1de)](_0x4310fb);}return!![];},TextManager[_0x1d9b69(0x387)]={'helpDesc':{'equip':VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x351)][_0x1d9b69(0x190)]['equipCmdDesc']??_0x1d9b69(0x12d),'optimize':VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x351)][_0x1d9b69(0x190)][_0x1d9b69(0x2f2)]??_0x1d9b69(0x289),'clear':VisuMZ[_0x1d9b69(0x222)]['Settings'][_0x1d9b69(0x190)]['clearCmdDesc']??_0x1d9b69(0x37e)}},ColorManager[_0x1d9b69(0x173)]=function(_0x4c6f10){const _0x3ac791=_0x1d9b69;if(!_0x4c6f10)return this['normalColor']();else{if(_0x4c6f10[_0x3ac791(0x3dc)][_0x3ac791(0x356)](/<COLOR:[ ](\d+)>/i))return this[_0x3ac791(0xfd)](Number(RegExp['$1'])[_0x3ac791(0x245)](0x0,0x1f));else return _0x4c6f10['note']['match'](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this[_0x3ac791(0x242)]();}},ColorManager['getColor']=function(_0x60a182){const _0x3f099b=_0x1d9b69;return _0x60a182=String(_0x60a182),_0x60a182[_0x3f099b(0x356)](/#(.*)/i)?_0x3f099b(0x205)['format'](String(RegExp['$1'])):this[_0x3f099b(0xfd)](Number(_0x60a182));},SceneManager['isSceneShop']=function(){return this['_scene']&&this['_scene']['constructor']===Scene_Shop;},Game_Temp[_0x1d9b69(0x199)][_0x1d9b69(0x380)]=function(){const _0x536831=_0x1d9b69;if(this[_0x536831(0x203)])return![];return VisuMZ[_0x536831(0x222)][_0x536831(0x351)][_0x536831(0x321)]['Enable'];},VisuMZ[_0x1d9b69(0x40b)]=VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x351)][_0x1d9b69(0x30f)][_0x1d9b69(0x1f4)],VisuMZ['ItemsEquipsCore']['Game_BattlerBase_param']=Game_BattlerBase[_0x1d9b69(0x199)][_0x1d9b69(0x154)],Game_BattlerBase[_0x1d9b69(0x199)]['param']=function(_0x81f8ad){const _0x2c2dbf=_0x1d9b69;return this[_0x2c2dbf(0x409)]?this[_0x2c2dbf(0x2f3)]?VisuMZ['ShopMenuStatusStandard']:0x1:VisuMZ[_0x2c2dbf(0x222)][_0x2c2dbf(0x111)]['call'](this,_0x81f8ad);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x3d5)]=Game_BattlerBase[_0x1d9b69(0x199)][_0x1d9b69(0x266)],Game_BattlerBase['prototype'][_0x1d9b69(0x266)]=function(_0x535f0d){const _0x3db555=_0x1d9b69;if(!_0x535f0d)return![];if(!VisuMZ[_0x3db555(0x222)][_0x3db555(0x3d5)]['call'](this,_0x535f0d))return![];if(!this[_0x3db555(0x28f)](_0x535f0d))return![];if(!this[_0x3db555(0x236)](_0x535f0d))return![];return!![];},Game_BattlerBase['prototype']['meetsItemConditionsNotetags']=function(_0x32709f){if(!this['checkItemConditionsSwitchNotetags'](_0x32709f))return![];return!![];},Game_BattlerBase[_0x1d9b69(0x199)][_0x1d9b69(0x258)]=function(_0x226c6b){const _0x243ce6=_0x1d9b69,_0x91cf50=_0x226c6b[_0x243ce6(0x3dc)];if(_0x91cf50[_0x243ce6(0x356)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x40b0ef=JSON['parse']('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x3f819f of _0x40b0ef){if(!$gameSwitches[_0x243ce6(0x1de)](_0x3f819f))return![];}return!![];}if(_0x91cf50[_0x243ce6(0x356)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2c34d6=JSON[_0x243ce6(0x443)]('['+RegExp['$1'][_0x243ce6(0x356)](/\d+/g)+']');for(const _0x3a66ee of _0x2c34d6){if(!$gameSwitches[_0x243ce6(0x1de)](_0x3a66ee))return![];}return!![];}if(_0x91cf50[_0x243ce6(0x356)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2893e7=JSON[_0x243ce6(0x443)]('['+RegExp['$1'][_0x243ce6(0x356)](/\d+/g)+']');for(const _0x52cbde of _0x2893e7){if($gameSwitches[_0x243ce6(0x1de)](_0x52cbde))return!![];}return![];}if(_0x91cf50[_0x243ce6(0x356)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4b80af=JSON[_0x243ce6(0x443)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x553849 of _0x4b80af){if(!$gameSwitches[_0x243ce6(0x1de)](_0x553849))return!![];}return![];}if(_0x91cf50[_0x243ce6(0x356)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x200604=JSON[_0x243ce6(0x443)]('['+RegExp['$1'][_0x243ce6(0x356)](/\d+/g)+']');for(const _0x1d1df2 of _0x200604){if(!$gameSwitches[_0x243ce6(0x1de)](_0x1d1df2))return!![];}return![];}if(_0x91cf50[_0x243ce6(0x356)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1a6bb5=JSON[_0x243ce6(0x443)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x7ef0f5 of _0x1a6bb5){if($gameSwitches['value'](_0x7ef0f5))return![];}return!![];}return!![];},Game_BattlerBase['prototype']['meetsItemConditionsJS']=function(_0x5839cd){const _0x3ec320=_0x1d9b69,_0x381f08=_0x5839cd[_0x3ec320(0x3dc)],_0x212ba1=VisuMZ[_0x3ec320(0x222)][_0x3ec320(0x410)];return _0x212ba1[_0x5839cd['id']]?_0x212ba1[_0x5839cd['id']][_0x3ec320(0x422)](this,_0x5839cd):!![];},Game_Actor[_0x1d9b69(0x199)]['initEquips']=function(_0x1cb55f){const _0x47b766=_0x1d9b69;_0x1cb55f=this['convertInitEquipsToItems'](_0x1cb55f);const _0x3e3124=this[_0x47b766(0xd4)]();this[_0x47b766(0x244)]=[];for(let _0x4e6e0b=0x0;_0x4e6e0b<_0x3e3124[_0x47b766(0x440)];_0x4e6e0b++){this[_0x47b766(0x244)][_0x4e6e0b]=new Game_Item();}for(let _0x4d8ba6=0x0;_0x4d8ba6<_0x3e3124['length'];_0x4d8ba6++){const _0x557b54=_0x3e3124[_0x4d8ba6],_0x4decfb=this['getMatchingInitEquip'](_0x1cb55f,_0x557b54);if(this[_0x47b766(0x44e)](_0x4decfb))this[_0x47b766(0x244)][_0x4d8ba6]['setObject'](_0x4decfb);}this[_0x47b766(0x2ee)](!![]),this['refresh']();},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x2e2)]=function(_0x968c40){const _0x395811=_0x1d9b69,_0x3fd596=[];for(let _0x26123f=0x0;_0x26123f<_0x968c40[_0x395811(0x440)];_0x26123f++){const _0x1492b3=_0x968c40[_0x26123f];if(_0x1492b3<=0x0)continue;const _0x17e48f=$dataSystem[_0x395811(0x455)][_0x26123f+0x1];if(_0x17e48f===$dataSystem[_0x395811(0x455)][0x1]||_0x26123f===0x1&&this['isDualWield']())_0x3fd596[_0x395811(0xc3)]($dataWeapons[_0x1492b3]);else{if(BattleManager[_0x395811(0x10f)]()){const _0x278640=$dataArmors[_0x1492b3];_0x278640&&_0x278640[_0x395811(0x171)]===_0x26123f+0x1&&_0x3fd596['push'](_0x278640);}else{const _0xa16ed4=$dataArmors[_0x1492b3];_0xa16ed4&&_0xa16ed4[_0x395811(0x171)]===_0x26123f+0x1&&_0x3fd596['push'](_0xa16ed4);}}}return _0x3fd596;},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0xb4)]=function(_0x44a6ee,_0x4efd26){const _0x3dc1ac=_0x1d9b69;for(const _0xd5dff of _0x44a6ee){if(!_0xd5dff)continue;if(_0xd5dff[_0x3dc1ac(0x171)]===_0x4efd26)return _0x44a6ee['splice'](_0x44a6ee['indexOf'](_0xd5dff),0x1),_0xd5dff;}return null;},Game_Actor[_0x1d9b69(0x199)]['equipSlots']=function(){const _0x5f045b=_0x1d9b69,_0x43851a=JsonEx['makeDeepCopy'](this[_0x5f045b(0x30d)]||this[_0x5f045b(0x3b5)]()['equipSlots']);if(_0x43851a[_0x5f045b(0x440)]>=0x2&&this[_0x5f045b(0x333)]())_0x43851a[0x1]=0x1;return _0x43851a;},Game_Actor[_0x1d9b69(0x199)]['forceChangeEquipSlots']=function(_0x47092d){const _0x49574d=_0x1d9b69;_0x47092d[_0x49574d(0x284)](0x0),_0x47092d[_0x49574d(0x284)](-0x1),this[_0x49574d(0x30d)]=_0x47092d,this[_0x49574d(0x1ae)](),this['updateChangedSlots']();},Game_Actor[_0x1d9b69(0x199)]['forceResetEquipSlots']=function(){const _0x5bae64=_0x1d9b69;this[_0x5bae64(0x30d)]=undefined,this[_0x5bae64(0x1ae)](),this[_0x5bae64(0x185)]();},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x185)]=function(){const _0xafa4d6=_0x1d9b69;let _0x51410b=this[_0xafa4d6(0xd4)]()[_0xafa4d6(0x440)];while(this[_0xafa4d6(0x244)]['length']>_0x51410b){const _0x3ffb67=this[_0xafa4d6(0x244)][this[_0xafa4d6(0x244)][_0xafa4d6(0x440)]-0x1];_0x3ffb67&&_0x3ffb67[_0xafa4d6(0x2c5)]()&&$gameParty['gainItem'](_0x3ffb67['object'](),0x1),this[_0xafa4d6(0x244)][_0xafa4d6(0xe2)]();}while(_0x51410b>this['_equips'][_0xafa4d6(0x440)]){this[_0xafa4d6(0x244)]['push'](new Game_Item());}},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x406)]=function(){const _0x32ce73=_0x1d9b69,_0x4296d3=this[_0x32ce73(0xd4)]();for(let _0x59dbaa=0x0;_0x59dbaa<_0x4296d3[_0x32ce73(0x440)];_0x59dbaa++){if(!this[_0x32ce73(0x244)][_0x59dbaa])this['_equips'][_0x59dbaa]=new Game_Item();}this[_0x32ce73(0x2ee)](![]),this[_0x32ce73(0x1ae)]();},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x343)]=Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x1fb)],Game_Actor[_0x1d9b69(0x199)]['changeEquip']=function(_0x25e452,_0x1b572c){const _0x45c95e=_0x1d9b69;if(!this[_0x45c95e(0x3ff)]){const _0x411f13=JsonEx[_0x45c95e(0x31b)](this);_0x411f13[_0x45c95e(0x3ff)]=!![],VisuMZ['ItemsEquipsCore'][_0x45c95e(0x343)][_0x45c95e(0x422)](this,_0x25e452,_0x1b572c),this[_0x45c95e(0x25c)](_0x411f13);}else VisuMZ[_0x45c95e(0x222)][_0x45c95e(0x343)][_0x45c95e(0x422)](this,_0x25e452,_0x1b572c);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x341)]=Game_Actor['prototype'][_0x1d9b69(0x142)],Game_Actor[_0x1d9b69(0x199)]['forceChangeEquip']=function(_0x5abb80,_0x43bb58){const _0x83fafe=_0x1d9b69;if(!this[_0x83fafe(0x3ff)]){const _0x59893c=JsonEx['makeDeepCopy'](this);_0x59893c[_0x83fafe(0x3ff)]=!![],VisuMZ[_0x83fafe(0x222)][_0x83fafe(0x341)][_0x83fafe(0x422)](this,_0x5abb80,_0x43bb58),this[_0x83fafe(0x25c)](_0x59893c);}else VisuMZ[_0x83fafe(0x222)][_0x83fafe(0x341)][_0x83fafe(0x422)](this,_0x5abb80,_0x43bb58);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x40f)]=Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x435)],Game_Actor['prototype'][_0x1d9b69(0x435)]=function(_0x40c6a7){const _0x54b456=_0x1d9b69;if(!this['_tempActor']){const _0x232394=JsonEx[_0x54b456(0x31b)](this);_0x232394['_tempActor']=!![],VisuMZ[_0x54b456(0x222)][_0x54b456(0x40f)]['call'](this,_0x40c6a7),this[_0x54b456(0x25c)](_0x232394);}else VisuMZ['ItemsEquipsCore']['Game_Actor_discardEquip']['call'](this,_0x40c6a7);},Game_Actor[_0x1d9b69(0x199)]['releaseUnequippableItems']=function(_0x122c13){const _0x5f5bc6=_0x1d9b69;if(this[_0x5f5bc6(0x10d)])return;for(;;){const _0x54f348=this[_0x5f5bc6(0xd4)](),_0x1497fd=this[_0x5f5bc6(0x146)](),_0x54f265=_0x1497fd[_0x5f5bc6(0x440)];let _0x59d134=![];for(let _0x44f957=0x0;_0x44f957<_0x54f265;_0x44f957++){const _0x514822=_0x1497fd[_0x44f957];if(_0x514822&&(!this[_0x5f5bc6(0x44e)](_0x514822)||_0x514822[_0x5f5bc6(0x171)]!==_0x54f348[_0x44f957])){!_0x122c13&&this['tradeItemWithParty'](null,_0x514822);if(!this[_0x5f5bc6(0x3ff)]){const _0x400034=JsonEx['makeDeepCopy'](this);_0x400034[_0x5f5bc6(0x3ff)]=!![],this[_0x5f5bc6(0x244)][_0x44f957][_0x5f5bc6(0x3ef)](null),this[_0x5f5bc6(0x10d)]=!![],this['equipAdjustHpMp'](_0x400034),this[_0x5f5bc6(0x10d)]=undefined;}else this['_equips'][_0x44f957][_0x5f5bc6(0x3ef)](null);_0x59d134=!![];}}if(!_0x59d134)break;}},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x25c)]=function(_0x1605e0){const _0x5c5695=_0x1d9b69;if(this['_tempActor'])return;if(!VisuMZ[_0x5c5695(0x222)][_0x5c5695(0x351)][_0x5c5695(0x190)][_0x5c5695(0x1e0)])return;const _0x5e19e4=Math['round'](_0x1605e0[_0x5c5695(0x193)]()*this['mhp']),_0x52f0e6=Math[_0x5c5695(0x3a6)](_0x1605e0[_0x5c5695(0x2d6)]()*this[_0x5c5695(0x17f)]);if(this['hp']>0x0)this[_0x5c5695(0x1a3)](_0x5e19e4);if(this['mp']>0x0)this[_0x5c5695(0x2f8)](_0x52f0e6);},Game_Actor[_0x1d9b69(0x199)]['clearEquipments']=function(){const _0x2cf1ce=_0x1d9b69,_0x9ee020=this[_0x2cf1ce(0xd4)]()[_0x2cf1ce(0x440)];for(let _0x58fc2b=0x0;_0x58fc2b<_0x9ee020;_0x58fc2b++){if(this[_0x2cf1ce(0x2a7)](_0x58fc2b))this[_0x2cf1ce(0x1fb)](_0x58fc2b,null);}},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x2a7)]=function(_0x35e8c2){const _0x596431=_0x1d9b69;return this['nonRemovableEtypes']()[_0x596431(0x22a)](this[_0x596431(0xd4)]()[_0x35e8c2])?![]:this['isEquipChangeOk'](_0x35e8c2);},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0xce)]=function(){const _0x431872=_0x1d9b69;return VisuMZ[_0x431872(0x222)][_0x431872(0x351)][_0x431872(0x190)][_0x431872(0x1c8)];},Game_Actor[_0x1d9b69(0x199)]['optimizeEquipments']=function(){const _0x25a110=_0x1d9b69,_0x1a724b=this['equipSlots']()[_0x25a110(0x440)];for(let _0x88a18e=0x0;_0x88a18e<_0x1a724b;_0x88a18e++){if(this[_0x25a110(0x211)](_0x88a18e))this[_0x25a110(0x1fb)](_0x88a18e,null);}for(let _0x533a78=0x0;_0x533a78<_0x1a724b;_0x533a78++){if(this[_0x25a110(0x211)](_0x533a78))this['changeEquip'](_0x533a78,this['bestEquipItem'](_0x533a78));}},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x211)]=function(_0x2ae907){const _0x38ceb6=_0x1d9b69;return this[_0x38ceb6(0x22e)]()[_0x38ceb6(0x22a)](this[_0x38ceb6(0xd4)]()[_0x2ae907])?![]:this[_0x38ceb6(0xcb)](_0x2ae907);},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x22e)]=function(){const _0x47a0d1=_0x1d9b69;return VisuMZ[_0x47a0d1(0x222)][_0x47a0d1(0x351)][_0x47a0d1(0x190)]['NonOptimizeETypes'];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x31f)]=Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x3d9)],Game_Actor['prototype'][_0x1d9b69(0x3d9)]=function(_0x4b48b3,_0x5069fd){const _0x4e7fea=_0x1d9b69;if(this[_0x4e7fea(0x3ff)])return![];$gameTemp[_0x4e7fea(0x203)]=!![];const _0x3847f0=VisuMZ[_0x4e7fea(0x222)][_0x4e7fea(0x31f)]['call'](this,_0x4b48b3,_0x5069fd);return $gameTemp['_bypassNewLabel']=![],_0x3847f0;},Game_Actor['prototype'][_0x1d9b69(0x1df)]=function(_0x489f87,_0x5e4bee){const _0x28b2e2=_0x1d9b69,_0x4fa8a6=this['getNextAvailableEtypeId'](_0x489f87);if(_0x4fa8a6<0x0)return;const _0x4fba77=_0x489f87===0x1?$dataWeapons[_0x5e4bee]:$dataArmors[_0x5e4bee];this[_0x28b2e2(0x1fb)](_0x4fa8a6,_0x4fba77);},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x1f6)]=function(_0x34d616){const _0x5ce43c=_0x1d9b69;let _0x2cd639=0x0;const _0x17cde3=this[_0x5ce43c(0xd4)](),_0x7611c8=this['equips']();for(let _0x396a18=0x0;_0x396a18<_0x17cde3['length'];_0x396a18++){if(_0x17cde3[_0x396a18]===_0x34d616){_0x2cd639=_0x396a18;if(!_0x7611c8[_0x396a18])return _0x2cd639;}}return _0x2cd639;},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2d4)]=Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x282)],Game_Actor[_0x1d9b69(0x199)]['paramPlus']=function(_0x19be0c){const _0x148122=_0x1d9b69;let _0x5d6461=VisuMZ[_0x148122(0x222)][_0x148122(0x2d4)][_0x148122(0x422)](this,_0x19be0c);for(const _0x6b019e of this['equips']()){if(_0x6b019e)_0x5d6461+=this[_0x148122(0x3aa)](_0x6b019e,_0x19be0c);}return _0x5d6461;},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x3aa)]=function(_0x52823c,_0x24a4fa){const _0x4ccf5d=_0x1d9b69;if(this['_calculatingJSParameters'])return 0x0;const _0x1fa980=(DataManager[_0x4ccf5d(0x33d)](_0x52823c)?'W%1':'A%1')[_0x4ccf5d(0x13e)](_0x52823c['id']),_0x4d0edc=_0x4ccf5d(0x41f)[_0x4ccf5d(0x13e)](_0x1fa980,_0x24a4fa);if(VisuMZ[_0x4ccf5d(0x222)][_0x4ccf5d(0x17c)][_0x4d0edc]){this[_0x4ccf5d(0x248)]=!![];const _0x268076=VisuMZ[_0x4ccf5d(0x222)]['paramJS'][_0x4d0edc]['call'](this,_0x52823c,_0x24a4fa);return this[_0x4ccf5d(0x248)]=![],_0x268076;}else return 0x0;},Game_Actor[_0x1d9b69(0x199)]['setShopStatusWindowMode']=function(_0x12d075){this['_shopStatusMenuMode']=!![],this['_shopStatusMenuAlly']=_0x12d075;},VisuMZ[_0x1d9b69(0x222)]['Game_Party_initialize']=Game_Party['prototype'][_0x1d9b69(0x2bf)],Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x2bf)]=function(){const _0x3d2c4d=_0x1d9b69;VisuMZ[_0x3d2c4d(0x222)][_0x3d2c4d(0x213)]['call'](this),this['initNewItemsList']();},Game_Party[_0x1d9b69(0x199)]['initNewItemsList']=function(){const _0x1d7a79=_0x1d9b69;this[_0x1d7a79(0x2c0)]=[];},Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x339)]=function(_0x359454){const _0x4b0462=_0x1d9b69;if(!$gameTemp[_0x4b0462(0x380)]())return![];if(this[_0x4b0462(0x2c0)]===undefined)this[_0x4b0462(0x20f)]();let _0x50a7a3='';if(DataManager[_0x4b0462(0x345)](_0x359454))_0x50a7a3=_0x4b0462(0x3de)[_0x4b0462(0x13e)](_0x359454['id']);else{if(DataManager[_0x4b0462(0x33d)](_0x359454))_0x50a7a3='weapon-%1'[_0x4b0462(0x13e)](_0x359454['id']);else{if(DataManager[_0x4b0462(0x2d3)](_0x359454))_0x50a7a3=_0x4b0462(0x24c)[_0x4b0462(0x13e)](_0x359454['id']);else return;}}return this[_0x4b0462(0x2c0)][_0x4b0462(0x22a)](_0x50a7a3);},Game_Party[_0x1d9b69(0x199)]['setNewItem']=function(_0xe318a7){const _0x3b02b1=_0x1d9b69;if(!$gameTemp[_0x3b02b1(0x380)]())return;if(this['_newItemsList']===undefined)this[_0x3b02b1(0x20f)]();let _0x28a161='';if(DataManager[_0x3b02b1(0x345)](_0xe318a7))_0x28a161='item-%1'['format'](_0xe318a7['id']);else{if(DataManager[_0x3b02b1(0x33d)](_0xe318a7))_0x28a161=_0x3b02b1(0x183)[_0x3b02b1(0x13e)](_0xe318a7['id']);else{if(DataManager['isArmor'](_0xe318a7))_0x28a161=_0x3b02b1(0x24c)['format'](_0xe318a7['id']);else return;}}if(!this['_newItemsList'][_0x3b02b1(0x22a)](_0x28a161))this['_newItemsList'][_0x3b02b1(0xc3)](_0x28a161);},Game_Party['prototype']['clearNewItem']=function(_0x3446d2){const _0x2a526e=_0x1d9b69;if(!$gameTemp[_0x2a526e(0x380)]())return;if(this[_0x2a526e(0x2c0)]===undefined)this[_0x2a526e(0x20f)]();let _0x1b1f12='';if(DataManager[_0x2a526e(0x345)](_0x3446d2))_0x1b1f12=_0x2a526e(0x3de)[_0x2a526e(0x13e)](_0x3446d2['id']);else{if(DataManager['isWeapon'](_0x3446d2))_0x1b1f12=_0x2a526e(0x183)[_0x2a526e(0x13e)](_0x3446d2['id']);else{if(DataManager['isArmor'](_0x3446d2))_0x1b1f12=_0x2a526e(0x24c)['format'](_0x3446d2['id']);else return;}}this[_0x2a526e(0x2c0)]['includes'](_0x1b1f12)&&this[_0x2a526e(0x2c0)][_0x2a526e(0x39c)](this[_0x2a526e(0x2c0)][_0x2a526e(0x436)](_0x1b1f12),0x1);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x275)]=Game_Party[_0x1d9b69(0x199)]['numItems'],Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x2d5)]=function(_0x3c6795){const _0x34d35d=_0x1d9b69;if(DataManager[_0x34d35d(0x103)](_0x3c6795))_0x3c6795=DataManager['getProxyItem'](_0x3c6795);return VisuMZ[_0x34d35d(0x222)][_0x34d35d(0x275)][_0x34d35d(0x422)](this,_0x3c6795);},VisuMZ[_0x1d9b69(0x222)]['Game_Party_gainItem']=Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x2da)],Game_Party[_0x1d9b69(0x199)][_0x1d9b69(0x2da)]=function(_0x5e8a00,_0x4a84f7,_0x27d5bd){const _0x25f9ff=_0x1d9b69;if(DataManager[_0x25f9ff(0x103)](_0x5e8a00))_0x5e8a00=null;const _0x12d26a=this[_0x25f9ff(0x2d5)](_0x5e8a00);VisuMZ[_0x25f9ff(0x222)][_0x25f9ff(0x170)][_0x25f9ff(0x422)](this,_0x5e8a00,_0x4a84f7,_0x27d5bd);if(this['numItems'](_0x5e8a00)>_0x12d26a)this[_0x25f9ff(0x15e)](_0x5e8a00);},Game_Party[_0x1d9b69(0x199)]['maxItems']=function(_0x1e43d0){const _0xb9e9a8=_0x1d9b69;if(DataManager[_0xb9e9a8(0x103)](_0x1e43d0))_0x1e43d0=DataManager['getProxyItem'](_0x1e43d0);return DataManager[_0xb9e9a8(0x403)](_0x1e43d0);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2a2)]=Scene_ItemBase[_0x1d9b69(0x199)]['activateItemWindow'],Scene_ItemBase[_0x1d9b69(0x199)]['activateItemWindow']=function(){const _0x16628c=_0x1d9b69;VisuMZ[_0x16628c(0x222)][_0x16628c(0x2a2)][_0x16628c(0x422)](this),this['_itemWindow'][_0x16628c(0x3f7)]();},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x28a)]=function(){const _0x2725f9=_0x1d9b69;if(ConfigManager[_0x2725f9(0x42a)]&&ConfigManager[_0x2725f9(0x1a4)]!==undefined)return ConfigManager[_0x2725f9(0x1a4)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x2725f9(0x2f4)]()[_0x2725f9(0x356)](/LOWER/i);else Scene_ItemBase[_0x2725f9(0x199)][_0x2725f9(0x38e)][_0x2725f9(0x422)](this);}},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x38e)]=function(){const _0x36c3c5=_0x1d9b69;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x36c3c5(0x177)]!==undefined)return ConfigManager['uiInputPosition'];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x36c3c5(0x2f4)]()[_0x36c3c5(0x356)](/RIGHT/i);else Scene_ItemBase[_0x36c3c5(0x199)]['isRightInputMode'][_0x36c3c5(0x422)](this);}},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x2f4)]=function(){const _0x272bfd=_0x1d9b69;return VisuMZ[_0x272bfd(0x222)]['Settings']['ItemScene'][_0x272bfd(0x445)];},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x373)]=function(){const _0x3c7567=_0x1d9b69;return this[_0x3c7567(0x15f)]&&this['_categoryWindow']['isUseModernControls']();},Scene_Item['prototype']['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x92e7d9=_0x1d9b69;return VisuMZ[_0x92e7d9(0x222)][_0x92e7d9(0x351)]['ItemScene']['EnableLayout'];},VisuMZ[_0x1d9b69(0x222)]['Scene_Item_create']=Scene_Item[_0x1d9b69(0x199)]['create'],Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x428)]=function(){const _0x19b29f=_0x1d9b69;VisuMZ[_0x19b29f(0x222)]['Scene_Item_create'][_0x19b29f(0x422)](this),this['isUseModernControls']()&&this['onCategoryOk']();},VisuMZ['ItemsEquipsCore']['Scene_Item_helpWindowRect']=Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x444)],Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x444)]=function(){const _0x32bb07=_0x1d9b69;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x32bb07(0x3f2)]():VisuMZ[_0x32bb07(0x222)][_0x32bb07(0x141)][_0x32bb07(0x422)](this);},Scene_Item[_0x1d9b69(0x199)]['helpWindowRectItemsEquipsCore']=function(){const _0x580aa9=_0x1d9b69,_0x36fa80=0x0,_0xfe1cfc=this[_0x580aa9(0x176)](),_0x58186f=Graphics[_0x580aa9(0x259)],_0x4ab5c9=this[_0x580aa9(0x1ce)]();return new Rectangle(_0x36fa80,_0xfe1cfc,_0x58186f,_0x4ab5c9);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2a8)]=Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x1b3)],Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x1b3)]=function(){const _0x3cc551=_0x1d9b69;VisuMZ['ItemsEquipsCore'][_0x3cc551(0x2a8)][_0x3cc551(0x422)](this),this['isUseModernControls']()&&this[_0x3cc551(0x14b)]();},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x14b)]=function(){const _0x30ab6f=_0x1d9b69;delete this[_0x30ab6f(0x15f)][_0x30ab6f(0x15b)]['ok'],delete this[_0x30ab6f(0x15f)][_0x30ab6f(0x15b)][_0x30ab6f(0x1a0)];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0xfb)]=Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x102)],Scene_Item['prototype']['categoryWindowRect']=function(){const _0x412637=_0x1d9b69;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x412637(0xf5)]():VisuMZ[_0x412637(0x222)]['Scene_Item_categoryWindowRect'][_0x412637(0x422)](this);},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0xf5)]=function(){const _0x10b197=_0x1d9b69,_0x57f63f=0x0,_0x1b9bfc=this[_0x10b197(0x20e)](),_0x1e65f3=Graphics[_0x10b197(0x259)],_0x413a31=this[_0x10b197(0x127)](0x1,!![]);return new Rectangle(_0x57f63f,_0x1b9bfc,_0x1e65f3,_0x413a31);},VisuMZ[_0x1d9b69(0x222)]['Scene_Item_createItemWindow']=Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x2ff)],Scene_Item[_0x1d9b69(0x199)]['createItemWindow']=function(){const _0x335652=_0x1d9b69;VisuMZ[_0x335652(0x222)][_0x335652(0x150)][_0x335652(0x422)](this),this[_0x335652(0x373)]()&&this[_0x335652(0x3d0)](),this[_0x335652(0x417)]()&&this[_0x335652(0x314)]();},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x26f)]=Scene_Item['prototype'][_0x1d9b69(0x3ee)],Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x3ee)]=function(){const _0x25777c=_0x1d9b69;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x25777c(0x354)]();else{const _0x1f6177=VisuMZ[_0x25777c(0x222)][_0x25777c(0x26f)][_0x25777c(0x422)](this);return this[_0x25777c(0x417)]()&&this[_0x25777c(0x200)]()&&(_0x1f6177[_0x25777c(0x364)]-=this[_0x25777c(0x3f3)]()),_0x1f6177;}},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x354)]=function(){const _0x3b527a=_0x1d9b69,_0x107a0f=this['isRightInputMode']()?this[_0x3b527a(0x3f3)]():0x0,_0x214d3c=this['_categoryWindow']['y']+this[_0x3b527a(0x15f)][_0x3b527a(0x217)],_0xc8da25=Graphics[_0x3b527a(0x259)]-this[_0x3b527a(0x3f3)](),_0x33a2e6=this['mainAreaBottom']()-_0x214d3c;return new Rectangle(_0x107a0f,_0x214d3c,_0xc8da25,_0x33a2e6);},Scene_Item['prototype'][_0x1d9b69(0x3d0)]=function(){const _0x238c5c=_0x1d9b69;this['_itemWindow'][_0x238c5c(0x399)](_0x238c5c(0x1a0),this['popScene']['bind'](this));},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x417)]=function(){const _0x1a858b=_0x1d9b69;return this[_0x1a858b(0x434)]()?!![]:VisuMZ['ItemsEquipsCore']['Settings'][_0x1a858b(0x312)][_0x1a858b(0x10e)];},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x200)]=function(){const _0x1a5f03=_0x1d9b69;return VisuMZ[_0x1a5f03(0x222)][_0x1a5f03(0x351)][_0x1a5f03(0x312)]['ItemSceneAdjustItemList'];},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x314)]=function(){const _0x490c3b=_0x1d9b69,_0x566ae5=this[_0x490c3b(0xd5)]();this[_0x490c3b(0x1e4)]=new Window_ShopStatus(_0x566ae5),this[_0x490c3b(0x2ea)](this[_0x490c3b(0x1e4)]),this[_0x490c3b(0x39f)]['setStatusWindow'](this[_0x490c3b(0x1e4)]);const _0x37e208=VisuMZ[_0x490c3b(0x222)][_0x490c3b(0x351)][_0x490c3b(0x312)][_0x490c3b(0x3ad)];this[_0x490c3b(0x1e4)][_0x490c3b(0x2fd)](_0x37e208||0x0);},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0xd5)]=function(){const _0x4fe47a=_0x1d9b69;return this[_0x4fe47a(0x434)]()?this['statusWindowRectItemsEquipsCore']():VisuMZ['ItemsEquipsCore'][_0x4fe47a(0x351)][_0x4fe47a(0x312)]['ItemMenuStatusRect'][_0x4fe47a(0x422)](this);},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x295)]=function(){const _0x28a8f1=_0x1d9b69,_0x55aed9=this['statusWidth'](),_0x3c679b=this[_0x28a8f1(0x39f)][_0x28a8f1(0x217)],_0x4e1bcd=this[_0x28a8f1(0x38e)]()?0x0:Graphics['boxWidth']-this['statusWidth'](),_0x211fd7=this[_0x28a8f1(0x39f)]['y'];return new Rectangle(_0x4e1bcd,_0x211fd7,_0x55aed9,_0x3c679b);},Scene_Item[_0x1d9b69(0x199)]['statusWidth']=function(){const _0x3ca491=_0x1d9b69;return Scene_Shop[_0x3ca491(0x199)][_0x3ca491(0x3f3)]();},Scene_Item['prototype'][_0x1d9b69(0x450)]=function(){const _0xe4d6f7=_0x1d9b69;if(!this['updatedLayoutStyle']())return![];if(!this['isUseModernControls']())return![];if(!this[_0xe4d6f7(0x39f)])return![];if(!this[_0xe4d6f7(0x39f)]['active'])return![];return this[_0xe4d6f7(0x2f4)]()&&this[_0xe4d6f7(0x373)]();},Scene_Item['prototype'][_0x1d9b69(0x28d)]=function(){const _0x4bdabf=_0x1d9b69;if(this[_0x4bdabf(0x450)]())return this[_0x4bdabf(0x39f)][_0x4bdabf(0x29c)]()===0x1?TextManager[_0x4bdabf(0x3c9)]('left',_0x4bdabf(0x35a)):TextManager[_0x4bdabf(0x3c9)]('pageup','pagedown');return Scene_ItemBase[_0x4bdabf(0x199)][_0x4bdabf(0x28d)][_0x4bdabf(0x422)](this);},Scene_Item[_0x1d9b69(0x199)][_0x1d9b69(0x2d1)]=function(){const _0x54fd2b=_0x1d9b69;if(this[_0x54fd2b(0x450)]())return VisuMZ[_0x54fd2b(0x222)][_0x54fd2b(0x351)][_0x54fd2b(0x312)][_0x54fd2b(0x21f)];return Scene_ItemBase[_0x54fd2b(0x199)][_0x54fd2b(0x2d1)][_0x54fd2b(0x422)](this);},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x28a)]=function(){const _0x1ae2bd=_0x1d9b69;if(ConfigManager['uiMenuStyle']&&ConfigManager['uiHelpPosition']!==undefined)return ConfigManager[_0x1ae2bd(0x1a4)];else{if(this[_0x1ae2bd(0x434)]())return this['updatedLayoutStyle']()['match'](/LOWER/i);else Scene_MenuBase[_0x1ae2bd(0x199)][_0x1ae2bd(0x38e)][_0x1ae2bd(0x422)](this);}},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x38e)]=function(){const _0x4f8992=_0x1d9b69;if(ConfigManager[_0x4f8992(0x42a)]&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager[_0x4f8992(0x177)];else{if(this[_0x4f8992(0x434)]())return this[_0x4f8992(0x2f4)]()[_0x4f8992(0x356)](/RIGHT/i);else Scene_MenuBase[_0x4f8992(0x199)]['isRightInputMode']['call'](this);}},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x2f4)]=function(){const _0x131390=_0x1d9b69;return VisuMZ[_0x131390(0x222)][_0x131390(0x351)][_0x131390(0x190)][_0x131390(0x445)];},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x373)]=function(){const _0x1c57ba=_0x1d9b69;return this[_0x1c57ba(0x36f)]&&this[_0x1c57ba(0x36f)][_0x1c57ba(0x373)]();},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x434)]=function(){const _0x400373=_0x1d9b69;return VisuMZ[_0x400373(0x222)][_0x400373(0x351)]['EquipScene'][_0x400373(0x149)];},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x3a2)]=Scene_Equip[_0x1d9b69(0x199)]['create'],Scene_Equip['prototype'][_0x1d9b69(0x428)]=function(){const _0x240bcc=_0x1d9b69;VisuMZ['ItemsEquipsCore'][_0x240bcc(0x3a2)][_0x240bcc(0x422)](this),this[_0x240bcc(0x373)]()&&this[_0x240bcc(0x155)]();},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x3a4)]=Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x444)],Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x444)]=function(){const _0x38702e=_0x1d9b69;return this[_0x38702e(0x434)]()?this[_0x38702e(0x3f2)]():VisuMZ[_0x38702e(0x222)]['Scene_Equip_helpWindowRect']['call'](this);},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x3f2)]=function(){const _0x14efac=_0x1d9b69,_0x2a7625=0x0,_0x4369e2=this['helpAreaTop'](),_0x850dca=Graphics[_0x14efac(0x259)],_0xd64347=this['helpAreaHeight']();return new Rectangle(_0x2a7625,_0x4369e2,_0x850dca,_0xd64347);},VisuMZ['ItemsEquipsCore']['Scene_Equip_statusWindowRect']=Scene_Equip['prototype'][_0x1d9b69(0xd5)],Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0xd5)]=function(){const _0x264e3f=_0x1d9b69;return this[_0x264e3f(0x434)]()?this[_0x264e3f(0x295)]():VisuMZ[_0x264e3f(0x222)][_0x264e3f(0x408)]['call'](this);},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x295)]=function(){const _0x248c3b=_0x1d9b69,_0x316c06=this['isRightInputMode']()?0x0:Graphics[_0x248c3b(0x259)]-this[_0x248c3b(0x3f3)](),_0x58e235=this[_0x248c3b(0x20e)](),_0x1a497b=this[_0x248c3b(0x3f3)](),_0x2621c3=this[_0x248c3b(0x1ea)]();return new Rectangle(_0x316c06,_0x58e235,_0x1a497b,_0x2621c3);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x396)]=Scene_Equip[_0x1d9b69(0x199)]['createCommandWindow'],Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x14c)]=function(){const _0x59f94c=_0x1d9b69;VisuMZ[_0x59f94c(0x222)]['Scene_Equip_createCommandWindow'][_0x59f94c(0x422)](this);if(this[_0x59f94c(0x326)])this['_commandWindow']['setHelpWindow'](this[_0x59f94c(0x326)]);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x1c9)]=Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x110)],Scene_Equip['prototype'][_0x1d9b69(0x110)]=function(){const _0xc9e6=_0x1d9b69;return this[_0xc9e6(0x434)]()?this[_0xc9e6(0x433)]():VisuMZ[_0xc9e6(0x222)][_0xc9e6(0x1c9)][_0xc9e6(0x422)](this);},Scene_Equip[_0x1d9b69(0x199)]['shouldCommandWindowExist']=function(){const _0x4abe63=_0x1d9b69,_0x16c4cb=VisuMZ[_0x4abe63(0x222)]['Settings'][_0x4abe63(0x190)];return _0x16c4cb['CommandAddOptimize']||_0x16c4cb[_0x4abe63(0x438)];},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x433)]=function(){const _0xff5bb6=_0x1d9b69,_0x18b5ce=this[_0xff5bb6(0x180)](),_0x1adc56=this[_0xff5bb6(0x38e)]()?this['statusWidth']():0x0,_0x2d5766=this[_0xff5bb6(0x20e)](),_0x10cf18=Graphics[_0xff5bb6(0x259)]-this[_0xff5bb6(0x3f3)](),_0x1c9f14=_0x18b5ce?this[_0xff5bb6(0x127)](0x1,!![]):0x0;return new Rectangle(_0x1adc56,_0x2d5766,_0x10cf18,_0x1c9f14);},VisuMZ[_0x1d9b69(0x222)]['Scene_Equip_createSlotWindow']=Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x45a)],Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x45a)]=function(){const _0x5660d4=_0x1d9b69;VisuMZ[_0x5660d4(0x222)][_0x5660d4(0x418)][_0x5660d4(0x422)](this),this[_0x5660d4(0x373)]()&&this[_0x5660d4(0x1a7)]();},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0xe3)]=Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x18e)],Scene_Equip[_0x1d9b69(0x199)]['slotWindowRect']=function(){const _0x5ce2bd=_0x1d9b69;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x5ce2bd(0x124)]():VisuMZ[_0x5ce2bd(0x222)][_0x5ce2bd(0xe3)][_0x5ce2bd(0x422)](this);},Scene_Equip[_0x1d9b69(0x199)]['slotWindowRectItemsEquipsCore']=function(){const _0x2d6df7=_0x1d9b69,_0x51c968=this[_0x2d6df7(0x110)](),_0x2ef00f=this[_0x2d6df7(0x38e)]()?this[_0x2d6df7(0x3f3)]():0x0,_0x312bd0=_0x51c968['y']+_0x51c968[_0x2d6df7(0x217)],_0x336810=Graphics[_0x2d6df7(0x259)]-this[_0x2d6df7(0x3f3)](),_0x284627=this['mainAreaHeight']()-_0x51c968['height'];return new Rectangle(_0x2ef00f,_0x312bd0,_0x336810,_0x284627);},VisuMZ[_0x1d9b69(0x222)]['Scene_Equip_itemWindowRect']=Scene_Equip[_0x1d9b69(0x199)]['itemWindowRect'],Scene_Equip['prototype']['itemWindowRect']=function(){const _0x333543=_0x1d9b69;return this[_0x333543(0x434)]()?this[_0x333543(0x18e)]():VisuMZ[_0x333543(0x222)][_0x333543(0x395)][_0x333543(0x422)](this);},Scene_Equip[_0x1d9b69(0x199)]['statusWidth']=function(){const _0x4cd3e6=_0x1d9b69;return this[_0x4cd3e6(0x434)]()?this['geUpdatedLayoutStatusWidth']():VisuMZ[_0x4cd3e6(0x222)]['Settings'][_0x4cd3e6(0x190)][_0x4cd3e6(0x405)];},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x1f9)]=function(){const _0x113e57=_0x1d9b69;return Math[_0x113e57(0x21c)](Graphics[_0x113e57(0x259)]/0x2);},Scene_Equip['prototype'][_0x1d9b69(0x1a7)]=function(){const _0x56f1fd=_0x1d9b69;this[_0x56f1fd(0x426)][_0x56f1fd(0x399)](_0x56f1fd(0x1a0),this[_0x56f1fd(0x292)][_0x56f1fd(0x2ae)](this)),this[_0x56f1fd(0x426)][_0x56f1fd(0x399)](_0x56f1fd(0x1a2),this[_0x56f1fd(0x18b)]['bind'](this)),this[_0x56f1fd(0x426)][_0x56f1fd(0x399)](_0x56f1fd(0x322),this[_0x56f1fd(0x2c7)][_0x56f1fd(0x2ae)](this));},VisuMZ[_0x1d9b69(0x222)]['Scene_Equip_commandEquip']=Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x155)],Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x155)]=function(){const _0x249573=_0x1d9b69;this[_0x249573(0x373)]()&&(this[_0x249573(0x36f)][_0x249573(0x239)](),this[_0x249573(0x36f)][_0x249573(0x3d8)]()),VisuMZ[_0x249573(0x222)][_0x249573(0xac)][_0x249573(0x422)](this);},VisuMZ[_0x1d9b69(0x222)]['Scene_Equip_onSlotOk']=Scene_Equip['prototype']['onSlotOk'],Scene_Equip['prototype'][_0x1d9b69(0x16b)]=function(){const _0xf0623c=_0x1d9b69;this[_0xf0623c(0x426)][_0xf0623c(0x458)]()>=0x0?(VisuMZ[_0xf0623c(0x222)][_0xf0623c(0x188)]['call'](this),this[_0xf0623c(0x412)]()):(this['_slotWindow'][_0xf0623c(0x3fe)](0x0),this[_0xf0623c(0x426)][_0xf0623c(0x42d)]());},Scene_Equip[_0x1d9b69(0x199)]['onSlotOkAutoSelect']=function(){const _0xb57e0f=_0x1d9b69;this['_itemWindow'][_0xb57e0f(0x1ae)]();const _0x45ee7f=this[_0xb57e0f(0x426)]['item'](),_0x290b23=this[_0xb57e0f(0x39f)]['_data'][_0xb57e0f(0x436)](_0x45ee7f),_0x49dd1b=Math[_0xb57e0f(0x21c)](this[_0xb57e0f(0x39f)][_0xb57e0f(0xbf)]()/0x2)-0x1;this[_0xb57e0f(0x39f)][_0xb57e0f(0x3fe)](_0x290b23>=0x0?_0x290b23:0x0),this[_0xb57e0f(0x39f)][_0xb57e0f(0x34e)]>0x1&&(this[_0xb57e0f(0x39f)][_0xb57e0f(0x34e)]=0x1,this[_0xb57e0f(0x39f)]['updateSmoothScroll']()),this[_0xb57e0f(0x39f)][_0xb57e0f(0x189)](this['_itemWindow']['index']()-_0x49dd1b);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x404)]=Scene_Equip[_0x1d9b69(0x199)]['onSlotCancel'],Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x349)]=function(){const _0x1ec905=_0x1d9b69;VisuMZ[_0x1ec905(0x222)][_0x1ec905(0x404)][_0x1ec905(0x422)](this),this[_0x1ec905(0x373)]()&&(this[_0x1ec905(0x36f)][_0x1ec905(0x3fe)](0x0),this[_0x1ec905(0x426)][_0x1ec905(0x3d8)]());},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x32b)]=Scene_Equip[_0x1d9b69(0x199)]['onActorChange'],Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x104)]=function(){const _0x2e7447=_0x1d9b69;VisuMZ[_0x2e7447(0x222)]['Scene_Equip_onActorChange'][_0x2e7447(0x422)](this),this['isUseModernControls']()&&(this[_0x2e7447(0x36f)][_0x2e7447(0x3d8)](),this['_commandWindow'][_0x2e7447(0x239)](),this[_0x2e7447(0x426)][_0x2e7447(0x3fe)](0x0),this['_slotWindow'][_0x2e7447(0x42d)]());},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x296)]=function(){const _0xd61de9=_0x1d9b69;if(!this['_slotWindow'])return![];if(!this[_0xd61de9(0x426)][_0xd61de9(0x33b)])return![];return this[_0xd61de9(0x426)][_0xd61de9(0x11b)]();},Scene_Equip[_0x1d9b69(0x199)]['buttonAssistKey3']=function(){const _0x224a59=_0x1d9b69;if(this[_0x224a59(0x296)]())return TextManager[_0x224a59(0x27c)](_0x224a59(0x385));return Scene_MenuBase[_0x224a59(0x199)]['buttonAssistKey3'][_0x224a59(0x422)](this);},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x3eb)]=function(){const _0x55c066=_0x1d9b69;if(this[_0x55c066(0x296)]())return VisuMZ[_0x55c066(0x222)]['Settings'][_0x55c066(0x190)]['buttonAssistRemove'];return Scene_MenuBase[_0x55c066(0x199)]['buttonAssistText3'][_0x55c066(0x422)](this);},Scene_Equip[_0x1d9b69(0x199)][_0x1d9b69(0x42f)]=function(){const _0x3a75c7=_0x1d9b69;if(this[_0x3a75c7(0x296)]())return this[_0x3a75c7(0x3f5)][_0x3a75c7(0x364)]/0x5/-0x3;return Scene_MenuBase[_0x3a75c7(0x199)][_0x3a75c7(0x42f)]['call'](this);},Scene_Equip[_0x1d9b69(0x199)]['popScene']=function(){const _0x240146=_0x1d9b69;SceneManager[_0x240146(0xe2)]();},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x27e)]=Scene_Load['prototype'][_0x1d9b69(0x454)],Scene_Load[_0x1d9b69(0x199)][_0x1d9b69(0x454)]=function(){const _0x1bdca6=_0x1d9b69;VisuMZ['ItemsEquipsCore'][_0x1bdca6(0x27e)][_0x1bdca6(0x422)](this),this['refreshActorEquipSlotsIfUpdated']();},Scene_Load[_0x1d9b69(0x199)][_0x1d9b69(0x219)]=function(){const _0xb4a5c5=_0x1d9b69;if($gameSystem[_0xb4a5c5(0xc5)]()!==$dataSystem[_0xb4a5c5(0xc5)])for(const _0x5cd9de of $gameActors[_0xb4a5c5(0xf2)]){if(_0x5cd9de)_0x5cd9de[_0xb4a5c5(0x406)]();}},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x28a)]=function(){const _0x1812e7=_0x1d9b69;if(ConfigManager[_0x1812e7(0x42a)]&&ConfigManager[_0x1812e7(0x1a4)]!==undefined)return ConfigManager['uiHelpPosition'];else{if(this[_0x1812e7(0x434)]())return this[_0x1812e7(0x2f4)]()['match'](/LOWER/i);else Scene_MenuBase[_0x1812e7(0x199)][_0x1812e7(0x38e)]['call'](this);}},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x38e)]=function(){const _0x197029=_0x1d9b69;if(ConfigManager[_0x197029(0x42a)]&&ConfigManager[_0x197029(0x177)]!==undefined)return ConfigManager[_0x197029(0x177)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x197029(0x2f4)]()[_0x197029(0x356)](/RIGHT/i);else Scene_MenuBase['prototype']['isRightInputMode'][_0x197029(0x422)](this);}},Scene_Shop['prototype'][_0x1d9b69(0x2f4)]=function(){const _0x274dd1=_0x1d9b69;return VisuMZ['ItemsEquipsCore'][_0x274dd1(0x351)][_0x274dd1(0x191)][_0x274dd1(0x445)];},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x373)]=function(){const _0x416631=_0x1d9b69;return this[_0x416631(0x15f)]&&this['_categoryWindow'][_0x416631(0x373)]();},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x434)]=function(){const _0x20e731=_0x1d9b69;return VisuMZ['ItemsEquipsCore']['Settings'][_0x20e731(0x191)]['EnableLayout'];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x187)]=Scene_Shop['prototype'][_0x1d9b69(0x35e)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x35e)]=function(_0x5ea75d,_0x4a0781){const _0x510ab0=_0x1d9b69;_0x5ea75d=JsonEx[_0x510ab0(0x31b)](_0x5ea75d),VisuMZ[_0x510ab0(0x222)][_0x510ab0(0x187)][_0x510ab0(0x422)](this,_0x5ea75d,_0x4a0781),this[_0x510ab0(0xe6)]();},Scene_Shop[_0x1d9b69(0x199)]['adjustHiddenShownGoods']=function(){const _0x440b76=_0x1d9b69;this[_0x440b76(0x3ec)]=0x0;const _0x417680=[];for(const _0x537488 of this[_0x440b76(0x13a)]){this[_0x440b76(0x25e)](_0x537488)?this[_0x440b76(0x3ec)]++:_0x417680[_0x440b76(0xc3)](_0x537488);}for(const _0x31a692 of _0x417680){this['_goods']['remove'](_0x31a692);}},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x25e)]=function(_0x19233b){const _0x16b55d=_0x1d9b69;if(_0x19233b[0x0]>0x2||_0x19233b[0x0]<0x0)return![];const _0x2670c4=[$dataItems,$dataWeapons,$dataArmors][_0x19233b[0x0]][_0x19233b[0x1]];if(!_0x2670c4)return![];const _0x497092=_0x2670c4[_0x16b55d(0x3dc)]||'';if(_0x497092['match'](/<SHOW SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x10899b=JSON[_0x16b55d(0x443)]('['+RegExp['$1'][_0x16b55d(0x356)](/\d+/g)+']');for(const _0x3dde76 of _0x10899b){if(!$gameSwitches[_0x16b55d(0x1de)](_0x3dde76))return![];}return!![];}if(_0x497092['match'](/<SHOW SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x117a0f=JSON[_0x16b55d(0x443)]('['+RegExp['$1'][_0x16b55d(0x356)](/\d+/g)+']');for(const _0x3ec55e of _0x117a0f){if(!$gameSwitches[_0x16b55d(0x1de)](_0x3ec55e))return![];}return!![];}if(_0x497092[_0x16b55d(0x356)](/<SHOW SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4253ec=JSON['parse']('['+RegExp['$1'][_0x16b55d(0x356)](/\d+/g)+']');for(const _0x19a76e of _0x4253ec){if($gameSwitches[_0x16b55d(0x1de)](_0x19a76e))return!![];}return![];}if(_0x497092['match'](/<HIDE SHOP[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2e9189=JSON[_0x16b55d(0x443)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x199724 of _0x2e9189){if(!$gameSwitches[_0x16b55d(0x1de)](_0x199724))return!![];}return![];}if(_0x497092[_0x16b55d(0x356)](/<HIDE SHOP ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x393db2=JSON[_0x16b55d(0x443)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x2703d1 of _0x393db2){if(!$gameSwitches[_0x16b55d(0x1de)](_0x2703d1))return!![];}return![];}if(_0x497092[_0x16b55d(0x356)](/<HIDE SHOP ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5da70d=JSON[_0x16b55d(0x443)]('['+RegExp['$1'][_0x16b55d(0x356)](/\d+/g)+']');for(const _0x5c30f3 of _0x5da70d){if($gameSwitches[_0x16b55d(0x1de)](_0x5c30f3))return![];}return!![];}return!![];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x1e9)]=Scene_Shop[_0x1d9b69(0x199)]['create'],Scene_Shop['prototype'][_0x1d9b69(0x428)]=function(){const _0x9acaf1=_0x1d9b69;VisuMZ[_0x9acaf1(0x222)]['Scene_Shop_create'][_0x9acaf1(0x422)](this),this[_0x9acaf1(0x434)]()&&this[_0x9acaf1(0x3e4)](),this['resetShopSwitches']();},Scene_Shop['prototype'][_0x1d9b69(0x3e4)]=function(){const _0x3eeecb=_0x1d9b69;this[_0x3eeecb(0x243)][_0x3eeecb(0x439)](),this[_0x3eeecb(0x238)]['show'](),this[_0x3eeecb(0x238)]['deselect'](),this[_0x3eeecb(0x1e4)]['show']();},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2b0)]=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x444)],Scene_Shop[_0x1d9b69(0x199)]['helpWindowRect']=function(){const _0x56ff0f=_0x1d9b69;return this[_0x56ff0f(0x434)]()?this['helpWindowRectItemsEquipsCore']():VisuMZ[_0x56ff0f(0x222)][_0x56ff0f(0x2b0)]['call'](this);},Scene_Shop[_0x1d9b69(0x199)]['helpWindowRectItemsEquipsCore']=function(){const _0x8f2475=_0x1d9b69,_0x42e61e=0x0,_0x189566=this[_0x8f2475(0x176)](),_0xbbf6d4=Graphics[_0x8f2475(0x259)],_0x18ed31=this[_0x8f2475(0x1ce)]();return new Rectangle(_0x42e61e,_0x189566,_0xbbf6d4,_0x18ed31);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x377)]=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x2fb)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x2fb)]=function(){const _0x231f9a=_0x1d9b69;return this[_0x231f9a(0x434)]()?this[_0x231f9a(0x2e0)]():VisuMZ['ItemsEquipsCore'][_0x231f9a(0x377)][_0x231f9a(0x422)](this);},Scene_Shop[_0x1d9b69(0x199)]['goldWindowRectItemsEquipsCore']=function(){const _0x1ce013=_0x1d9b69,_0x1ca2ab=this[_0x1ce013(0x2ce)](),_0x4dc136=this[_0x1ce013(0x127)](0x1,!![]),_0x3a606d=this[_0x1ce013(0x38e)]()?0x0:Graphics['boxWidth']-_0x1ca2ab,_0x4c29ae=this[_0x1ce013(0x20e)]();return new Rectangle(_0x3a606d,_0x4c29ae,_0x1ca2ab,_0x4dc136);},VisuMZ['ItemsEquipsCore']['Scene_Shop_commandWindowRect']=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x110)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x110)]=function(){const _0x13b00f=_0x1d9b69;return this[_0x13b00f(0x434)]()?this[_0x13b00f(0x433)]():VisuMZ['ItemsEquipsCore'][_0x13b00f(0x39d)]['call'](this);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x433)]=function(){const _0x560f6b=_0x1d9b69,_0xb6b501=this[_0x560f6b(0x38e)]()?this['mainCommandWidth']():0x0,_0xd8c94=this['mainAreaTop'](),_0x151a2a=Graphics['boxWidth']-this[_0x560f6b(0x2ce)](),_0xe26161=this[_0x560f6b(0x127)](0x1,!![]);return new Rectangle(_0xb6b501,_0xd8c94,_0x151a2a,_0xe26161);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x1b7)]=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x156)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x156)]=function(){const _0x4bf646=_0x1d9b69;return this[_0x4bf646(0x434)]()?this['numberWindowRectItemsEquipsCore']():VisuMZ[_0x4bf646(0x222)][_0x4bf646(0x1b7)]['call'](this);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x11c)]=function(){const _0x2a8802=_0x1d9b69,_0x644198=this['_commandWindow']['y']+this[_0x2a8802(0x36f)][_0x2a8802(0x217)],_0x1a5350=Graphics[_0x2a8802(0x259)]-this[_0x2a8802(0x3f3)](),_0x564f88=this[_0x2a8802(0x38e)]()?Graphics[_0x2a8802(0x259)]-_0x1a5350:0x0,_0x3adf58=this[_0x2a8802(0x1ea)]()-this[_0x2a8802(0x36f)][_0x2a8802(0x217)];return new Rectangle(_0x564f88,_0x644198,_0x1a5350,_0x3adf58);},VisuMZ['ItemsEquipsCore']['Scene_Shop_statusWindowRect']=Scene_Shop[_0x1d9b69(0x199)]['statusWindowRect'],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0xd5)]=function(){const _0x5c7f9a=_0x1d9b69;return this[_0x5c7f9a(0x434)]()?this[_0x5c7f9a(0x295)]():VisuMZ[_0x5c7f9a(0x222)]['Scene_Shop_statusWindowRect'][_0x5c7f9a(0x422)](this);},Scene_Shop[_0x1d9b69(0x199)]['statusWindowRectItemsEquipsCore']=function(){const _0x5c4ccb=_0x1d9b69,_0x246b08=this[_0x5c4ccb(0x3f3)](),_0x4efb18=this[_0x5c4ccb(0x1ea)]()-this['_commandWindow'][_0x5c4ccb(0x217)],_0x1b4142=this[_0x5c4ccb(0x38e)]()?0x0:Graphics[_0x5c4ccb(0x259)]-_0x246b08,_0x3df53a=this['_commandWindow']['y']+this[_0x5c4ccb(0x36f)]['height'];return new Rectangle(_0x1b4142,_0x3df53a,_0x246b08,_0x4efb18);},VisuMZ[_0x1d9b69(0x222)]['Scene_Shop_buyWindowRect']=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x3c2)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x3c2)]=function(){const _0x410e20=_0x1d9b69;return this['isUseItemsEquipsCoreUpdatedLayout']()?this['buyWindowRectItemsEquipsCore']():VisuMZ[_0x410e20(0x222)][_0x410e20(0x1dc)][_0x410e20(0x422)](this);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x139)]=function(){const _0x2198d1=_0x1d9b69,_0x29f444=this[_0x2198d1(0x36f)]['y']+this[_0x2198d1(0x36f)][_0x2198d1(0x217)],_0x31104f=Graphics[_0x2198d1(0x259)]-this[_0x2198d1(0x3f3)](),_0xdcd773=this[_0x2198d1(0x1ea)]()-this[_0x2198d1(0x36f)]['height'],_0x1df9fd=this['isRightInputMode']()?Graphics[_0x2198d1(0x259)]-_0x31104f:0x0;return new Rectangle(_0x1df9fd,_0x29f444,_0x31104f,_0xdcd773);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x31a)]=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x1b3)],Scene_Shop['prototype'][_0x1d9b69(0x1b3)]=function(){const _0x272646=_0x1d9b69;VisuMZ[_0x272646(0x222)]['Scene_Shop_createCategoryWindow'][_0x272646(0x422)](this),this[_0x272646(0x373)]()&&this[_0x272646(0x14b)]();},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x35b)]=Scene_Shop['prototype'][_0x1d9b69(0x102)],Scene_Shop['prototype']['categoryWindowRect']=function(){const _0xae3976=_0x1d9b69;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0xae3976(0xf5)]():VisuMZ[_0xae3976(0x222)][_0xae3976(0x35b)]['call'](this);},Scene_Shop['prototype'][_0x1d9b69(0xf5)]=function(){const _0x39af96=_0x1d9b69,_0x285756=this['_commandWindow']['y'],_0x32f6b=this['_commandWindow']['width'],_0x20f998=this[_0x39af96(0x127)](0x1,!![]),_0x55b136=this['isRightInputMode']()?Graphics[_0x39af96(0x259)]-_0x32f6b:0x0;return new Rectangle(_0x55b136,_0x285756,_0x32f6b,_0x20f998);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x14b)]=function(){const _0x229e85=_0x1d9b69;delete this['_categoryWindow'][_0x229e85(0x15b)]['ok'],delete this[_0x229e85(0x15f)][_0x229e85(0x15b)]['cancel'];},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x131)]=Scene_Shop['prototype']['createSellWindow'],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x1ac)]=function(){const _0x185ae5=_0x1d9b69;VisuMZ[_0x185ae5(0x222)][_0x185ae5(0x131)][_0x185ae5(0x422)](this),this[_0x185ae5(0x434)]()&&this['postCreateSellWindowItemsEquipsCore']();},VisuMZ[_0x1d9b69(0x222)]['Scene_Shop_sellWindowRect']=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x26e)],Scene_Shop[_0x1d9b69(0x199)]['sellWindowRect']=function(){const _0x3a3bee=_0x1d9b69;return this['isUseItemsEquipsCoreUpdatedLayout']()?this['sellWindowRectItemsEquipsCore']():VisuMZ[_0x3a3bee(0x222)][_0x3a3bee(0x128)]['call'](this);},Scene_Shop[_0x1d9b69(0x199)]['sellWindowRectItemsEquipsCore']=function(){const _0x88d0a2=_0x1d9b69,_0x158707=this[_0x88d0a2(0x15f)]['y']+this[_0x88d0a2(0x15f)][_0x88d0a2(0x217)],_0x503ab6=Graphics[_0x88d0a2(0x259)]-this[_0x88d0a2(0x3f3)](),_0x28eb02=this[_0x88d0a2(0x1ea)]()-this[_0x88d0a2(0x15f)]['height'],_0x3fd314=this[_0x88d0a2(0x38e)]()?Graphics[_0x88d0a2(0x259)]-_0x503ab6:0x0;return new Rectangle(_0x3fd314,_0x158707,_0x503ab6,_0x28eb02);},Scene_Shop[_0x1d9b69(0x199)]['postCreateSellWindowItemsEquipsCore']=function(){const _0x5dcacb=_0x1d9b69;this[_0x5dcacb(0xb2)][_0x5dcacb(0x2b5)](this['_statusWindow']);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x3f3)]=function(){const _0x13cf16=_0x1d9b69;return VisuMZ[_0x13cf16(0x222)][_0x13cf16(0x351)]['StatusWindow'][_0x13cf16(0x451)];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x357)]=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0xbb)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0xbb)]=function(){const _0x4f0889=_0x1d9b69;VisuMZ[_0x4f0889(0x222)]['Scene_Shop_activateSellWindow']['call'](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x4f0889(0x1e4)][_0x4f0889(0x1cd)](),this[_0x4f0889(0xb2)]['updateHelp']();},VisuMZ[_0x1d9b69(0x222)]['Scene_Shop_commandBuy']=Scene_Shop['prototype'][_0x1d9b69(0x2f9)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x2f9)]=function(){const _0x20821e=_0x1d9b69;VisuMZ[_0x20821e(0x222)][_0x20821e(0x3a3)]['call'](this),this[_0x20821e(0x434)]()&&this[_0x20821e(0x27d)]();},Scene_Shop['prototype'][_0x1d9b69(0x27d)]=function(){const _0x163b6d=_0x1d9b69;this[_0x163b6d(0x145)]=this[_0x163b6d(0x145)]||0x0,this[_0x163b6d(0x238)][_0x163b6d(0x3fe)](this[_0x163b6d(0x145)]);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x3f9)]=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x327)],Scene_Shop['prototype'][_0x1d9b69(0x327)]=function(){const _0x3a28aa=_0x1d9b69;VisuMZ[_0x3a28aa(0x222)]['Scene_Shop_commandSell'][_0x3a28aa(0x422)](this),this[_0x3a28aa(0x434)]()&&this[_0x3a28aa(0x194)](),this[_0x3a28aa(0x373)]()&&(this[_0x3a28aa(0x15f)][_0x3a28aa(0x3fe)](0x0),this[_0x3a28aa(0x36a)]());},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x194)]=function(){const _0x243fbd=_0x1d9b69;this['_buyWindow'][_0x243fbd(0x439)](),this[_0x243fbd(0x36f)][_0x243fbd(0x439)]();},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x383)]=Scene_Shop['prototype'][_0x1d9b69(0x27f)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x27f)]=function(){const _0x4d563f=_0x1d9b69;VisuMZ[_0x4d563f(0x222)][_0x4d563f(0x383)]['call'](this),this[_0x4d563f(0x434)]()&&this[_0x4d563f(0x112)]();},Scene_Shop['prototype'][_0x1d9b69(0x112)]=function(){const _0x28c305=_0x1d9b69;this[_0x28c305(0x145)]=this[_0x28c305(0x238)][_0x28c305(0x458)](),this[_0x28c305(0x238)]['show'](),this[_0x28c305(0x238)][_0x28c305(0x239)](),this[_0x28c305(0x238)]['smoothScrollTo'](0x0,0x0),this[_0x28c305(0x1e4)][_0x28c305(0x1cd)](),this[_0x28c305(0x243)]['hide']();},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x24d)]=Scene_Shop[_0x1d9b69(0x199)]['onCategoryCancel'],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x252)]=function(){const _0x104343=_0x1d9b69;VisuMZ[_0x104343(0x222)]['Scene_Shop_onCategoryCancel'][_0x104343(0x422)](this),this[_0x104343(0x434)]()&&this[_0x104343(0x348)]();},Scene_Shop['prototype']['onCategoryCancelItemsEquipsCore']=function(){const _0x5c27d6=_0x1d9b69;this[_0x5c27d6(0x238)]['show'](),this[_0x5c27d6(0x36f)]['show']();},VisuMZ['ItemsEquipsCore']['Scene_Shop_onBuyOk']=Scene_Shop['prototype'][_0x1d9b69(0x23d)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x23d)]=function(){const _0x56b7d1=_0x1d9b69;$gameTemp[_0x56b7d1(0xf1)]=!![],VisuMZ[_0x56b7d1(0x222)][_0x56b7d1(0xfa)][_0x56b7d1(0x422)](this),$gameTemp[_0x56b7d1(0xf1)]=![],this[_0x56b7d1(0x28e)]=this['_buyWindow'][_0x56b7d1(0x158)]();},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2e1)]=Scene_Shop[_0x1d9b69(0x199)]['buyingPrice'],Scene_Shop[_0x1d9b69(0x199)]['buyingPrice']=function(){const _0x5d6700=_0x1d9b69;$gameTemp[_0x5d6700(0xf1)]=!![],this[_0x5d6700(0x28e)]=this['_buyWindow'][_0x5d6700(0x158)]();const _0x27f0a7=VisuMZ['ItemsEquipsCore'][_0x5d6700(0x2e1)]['call'](this);return $gameTemp[_0x5d6700(0xf1)]=![],this[_0x5d6700(0x28e)]=this[_0x5d6700(0x238)][_0x5d6700(0x158)](),_0x27f0a7;},VisuMZ[_0x1d9b69(0x222)]['Scene_Shop_onSellOk']=Scene_Shop['prototype'][_0x1d9b69(0x1ee)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x1ee)]=function(){const _0x4d0d76=_0x1d9b69;VisuMZ['ItemsEquipsCore'][_0x4d0d76(0x368)][_0x4d0d76(0x422)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x4d0d76(0x39b)]();},Scene_Shop[_0x1d9b69(0x199)]['onSellOkItemsEquipsCore']=function(){const _0x4873b0=_0x1d9b69;this[_0x4873b0(0x15f)][_0x4873b0(0x1cd)]();},VisuMZ[_0x1d9b69(0x222)]['Scene_Shop_onSellCancel']=Scene_Shop['prototype']['onSellCancel'],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x41c)]=function(){const _0x697344=_0x1d9b69;VisuMZ[_0x697344(0x222)][_0x697344(0x28c)]['call'](this),this[_0x697344(0x373)]()&&this['onCategoryCancel'](),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x697344(0x243)]['hide']();},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x3c8)]=function(_0x4b8937){const _0x2ab818=_0x1d9b69,_0x189412=this[_0x2ab818(0x28e)];this[_0x2ab818(0x28e)]=_0x4b8937;const _0x29bd11=this[_0x2ab818(0x26a)]();return this[_0x2ab818(0x28e)]=_0x189412,_0x29bd11;},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0xb9)]=Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x26a)],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x26a)]=function(){const _0x12527d=_0x1d9b69;let _0x5e7858=this[_0x12527d(0x2bc)]();const _0x1d4990=this[_0x12527d(0x28e)];return _0x5e7858=VisuMZ[_0x12527d(0x222)][_0x12527d(0x351)]['ShopScene'][_0x12527d(0x1d7)][_0x12527d(0x422)](this,_0x1d4990,_0x5e7858),_0x5e7858;},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x2bc)]=function(){const _0x48f894=_0x1d9b69;let _0x5bb5d4=this[_0x48f894(0x28e)][_0x48f894(0xd0)];if(!this['_item'])return 0x0;else{if(this[_0x48f894(0x28e)][_0x48f894(0x3dc)][_0x48f894(0x356)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x33f4d1=String(RegExp['$1']);let _0x5c420=this[_0x48f894(0x28e)],_0xf10a98=_0x5bb5d4*this['sellPriceRate']();try{eval(_0x33f4d1);}catch(_0x335b7f){if($gameTemp[_0x48f894(0x446)]())console[_0x48f894(0x1bb)](_0x335b7f);}if(isNaN(_0xf10a98))_0xf10a98=0x0;return Math['floor'](_0xf10a98);}else return this[_0x48f894(0x28e)][_0x48f894(0x3dc)][_0x48f894(0x356)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math['floor'](this[_0x48f894(0x2a0)]());}},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x2a0)]=function(){const _0x507725=_0x1d9b69;return this['_item'][_0x507725(0xd0)]*this[_0x507725(0x117)]();},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x117)]=function(){const _0x37ac67=_0x1d9b69;return VisuMZ[_0x37ac67(0x222)][_0x37ac67(0x351)][_0x37ac67(0x191)][_0x37ac67(0x246)];},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x450)]=function(){const _0x27929a=_0x1d9b69;if(!this['updatedLayoutStyle']())return![];if(!this['isUseModernControls']())return![];if(!this[_0x27929a(0xb2)])return![];if(!this[_0x27929a(0xb2)][_0x27929a(0x33b)])return![];return this['updatedLayoutStyle']()&&this[_0x27929a(0x373)]();},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x28d)]=function(){const _0x4b49e6=_0x1d9b69;if(this[_0x4b49e6(0x450)]())return this[_0x4b49e6(0xb2)][_0x4b49e6(0x29c)]()===0x1?TextManager[_0x4b49e6(0x3c9)]('left',_0x4b49e6(0x35a)):TextManager[_0x4b49e6(0x3c9)]('pageup',_0x4b49e6(0x1a2));else{if(this['_numberWindow']&&this['_numberWindow'][_0x4b49e6(0x33b)])return TextManager[_0x4b49e6(0x3c9)]('left','right');}return Scene_MenuBase[_0x4b49e6(0x199)]['buttonAssistKey1']['call'](this);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x392)]=function(){const _0xf2ef1f=_0x1d9b69;if(this[_0xf2ef1f(0x148)]&&this[_0xf2ef1f(0x148)][_0xf2ef1f(0x33b)])return TextManager[_0xf2ef1f(0x3c9)]('up','down');return Scene_MenuBase[_0xf2ef1f(0x199)][_0xf2ef1f(0x392)]['call'](this);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x2d1)]=function(){const _0x1dcdc9=_0x1d9b69;if(this[_0x1dcdc9(0x450)]())return VisuMZ['ItemsEquipsCore'][_0x1dcdc9(0x351)][_0x1dcdc9(0x312)][_0x1dcdc9(0x21f)];else{if(this[_0x1dcdc9(0x148)]&&this['_numberWindow'][_0x1dcdc9(0x33b)])return VisuMZ['ItemsEquipsCore'][_0x1dcdc9(0x351)][_0x1dcdc9(0x191)]['buttonAssistSmallIncrement'];}return Scene_MenuBase[_0x1dcdc9(0x199)]['buttonAssistText1'][_0x1dcdc9(0x422)](this);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0xf4)]=function(){const _0x264b9b=_0x1d9b69;if(this[_0x264b9b(0x148)]&&this['_numberWindow']['active'])return VisuMZ[_0x264b9b(0x222)][_0x264b9b(0x351)][_0x264b9b(0x191)]['buttonAssistLargeIncrement'];return Scene_MenuBase[_0x264b9b(0x199)][_0x264b9b(0xf4)][_0x264b9b(0x422)](this);},Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x2f0)]=function(){const _0x5bd120=_0x1d9b69;if(!SceneManager['isSceneShop']())return;const _0x4165b7=VisuMZ['ItemsEquipsCore'][_0x5bd120(0x351)]['ShopScene'];_0x4165b7[_0x5bd120(0xeb)]&&$gameSwitches[_0x5bd120(0x27a)](_0x4165b7[_0x5bd120(0xeb)],![]),_0x4165b7['SwitchSell']&&$gameSwitches[_0x5bd120(0x27a)](_0x4165b7['SwitchSell'],![]);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x41e)]=Scene_Shop[_0x1d9b69(0x199)]['doBuy'],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x228)]=function(_0x239394){const _0x204bdf=_0x1d9b69;VisuMZ[_0x204bdf(0x222)][_0x204bdf(0x41e)][_0x204bdf(0x422)](this,_0x239394);if(_0x239394<=0x0)return;const _0x3a40ad=VisuMZ[_0x204bdf(0x222)][_0x204bdf(0x351)]['ShopScene'];_0x3a40ad['SwitchBuy']&&$gameSwitches[_0x204bdf(0x27a)](_0x3a40ad['SwitchBuy'],!![]);},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x391)]=Scene_Shop[_0x1d9b69(0x199)]['doSell'],Scene_Shop[_0x1d9b69(0x199)][_0x1d9b69(0x1f2)]=function(_0x1508df){const _0xf518d3=_0x1d9b69;VisuMZ['ItemsEquipsCore'][_0xf518d3(0x391)]['call'](this,_0x1508df);if(_0x1508df<=0x0)return;const _0x3868af=VisuMZ[_0xf518d3(0x222)]['Settings']['ShopScene'];_0x3868af['SwitchBuy']&&$gameSwitches[_0xf518d3(0x27a)](_0x3868af[_0xf518d3(0xec)],!![]);};function Sprite_NewLabel(){const _0x3cc4a6=_0x1d9b69;this[_0x3cc4a6(0x2bf)](...arguments);}function _0x30c0(_0x3dbca9,_0x3cb0f3){const _0x264f87=_0x264f();return _0x30c0=function(_0x30c065,_0x55ddd8){_0x30c065=_0x30c065-0xac;let _0x573f22=_0x264f87[_0x30c065];return _0x573f22;},_0x30c0(_0x3dbca9,_0x3cb0f3);}Sprite_NewLabel[_0x1d9b69(0x199)]=Object[_0x1d9b69(0x428)](Sprite[_0x1d9b69(0x199)]),Sprite_NewLabel['prototype']['constructor']=Sprite_NewLabel,Sprite_NewLabel[_0x1d9b69(0x199)]['initialize']=function(){const _0x3db708=_0x1d9b69;Sprite[_0x3db708(0x199)][_0x3db708(0x2bf)][_0x3db708(0x422)](this),this['createBitmap']();},Sprite_NewLabel[_0x1d9b69(0x199)]['createBitmap']=function(){const _0x249ca8=_0x1d9b69,_0x5d229e=ImageManager[_0x249ca8(0x3b6)],_0x45caec=ImageManager[_0x249ca8(0x378)];this['bitmap']=new Bitmap(_0x5d229e,_0x45caec),this['drawNewLabelIcon'](),this[_0x249ca8(0x41b)]();},Sprite_NewLabel[_0x1d9b69(0x199)][_0x1d9b69(0x38f)]=function(){const _0x4acff3=_0x1d9b69,_0x23565d=VisuMZ[_0x4acff3(0x222)]['Settings'][_0x4acff3(0x321)][_0x4acff3(0x221)];if(_0x23565d<=0x0)return;const _0x21f57a=ImageManager[_0x4acff3(0x397)](_0x4acff3(0x1c2)),_0x1ba27f=ImageManager[_0x4acff3(0x3b6)],_0xe34df0=ImageManager[_0x4acff3(0x378)],_0x13257a=_0x23565d%0x10*_0x1ba27f,_0x51bf25=Math[_0x4acff3(0x21c)](_0x23565d/0x10)*_0xe34df0;this[_0x4acff3(0x3f8)][_0x4acff3(0x2c9)](_0x21f57a,_0x13257a,_0x51bf25,_0x1ba27f,_0xe34df0,0x0,0x0);},Sprite_NewLabel[_0x1d9b69(0x199)][_0x1d9b69(0x41b)]=function(){const _0x13bfca=_0x1d9b69,_0x27964a=VisuMZ[_0x13bfca(0x222)][_0x13bfca(0x351)][_0x13bfca(0x321)],_0x440cd5=_0x27964a[_0x13bfca(0x1af)];if(_0x440cd5==='')return;const _0x3165f7=ImageManager[_0x13bfca(0x3b6)],_0x4a5ef9=ImageManager[_0x13bfca(0x378)];this[_0x13bfca(0x3f8)]['fontFace']=_0x27964a['FontFace']||$gameSystem[_0x13bfca(0x432)](),this['bitmap'][_0x13bfca(0xfd)]=this['getTextColor'](),this[_0x13bfca(0x3f8)][_0x13bfca(0x363)]=_0x27964a['FontSize'],this[_0x13bfca(0x3f8)][_0x13bfca(0x273)](_0x440cd5,0x0,_0x4a5ef9/0x2,_0x3165f7,_0x4a5ef9/0x2,_0x13bfca(0x388));},Sprite_NewLabel[_0x1d9b69(0x199)]['getTextColor']=function(){const _0x1ed246=_0x1d9b69,_0x143595=VisuMZ[_0x1ed246(0x222)][_0x1ed246(0x351)][_0x1ed246(0x321)][_0x1ed246(0x452)];return _0x143595[_0x1ed246(0x356)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x1ed246(0xfd)](_0x143595);},Window_Base['prototype'][_0x1d9b69(0x30e)]=function(_0x136a18,_0x10307b,_0x5b7dab,_0x50f72d){const _0x5efeb3=_0x1d9b69;if(_0x136a18){const _0x4c9e54=_0x5b7dab+(this['lineHeight']()-ImageManager[_0x5efeb3(0x378)])/0x2,_0x40a57b=ImageManager[_0x5efeb3(0x3b6)]+0x4,_0x1f319b=Math[_0x5efeb3(0xef)](0x0,_0x50f72d-_0x40a57b);this[_0x5efeb3(0x120)](ColorManager[_0x5efeb3(0x173)](_0x136a18)),this[_0x5efeb3(0x18d)](_0x136a18[_0x5efeb3(0x318)],_0x10307b,_0x4c9e54),this[_0x5efeb3(0x273)](_0x136a18[_0x5efeb3(0x218)],_0x10307b+_0x40a57b,_0x5b7dab,_0x1f319b),this['resetTextColor']();}},Window_Base[_0x1d9b69(0x199)]['drawItemNumber']=function(_0x5ab095,_0x53b7cf,_0x10e8cd,_0x775a66){const _0x41fd97=_0x1d9b69;if(this['isDrawItemNumber'](_0x5ab095)){this[_0x41fd97(0x1c3)]();const _0x3a491c=VisuMZ[_0x41fd97(0x222)][_0x41fd97(0x351)]['ItemScene'],_0x450f0f=_0x3a491c['ItemQuantityFmt'],_0x38ea59=_0x450f0f[_0x41fd97(0x13e)]($gameParty[_0x41fd97(0x2d5)](_0x5ab095));this['contents']['fontSize']=_0x3a491c[_0x41fd97(0x23f)],this[_0x41fd97(0x273)](_0x38ea59,_0x53b7cf,_0x10e8cd,_0x775a66,_0x41fd97(0x35a)),this['resetFontSettings']();}},Window_Base[_0x1d9b69(0x199)]['isDrawItemNumber']=function(_0x1e9b6b){const _0x337e68=_0x1d9b69;if(DataManager[_0x337e68(0x26d)](_0x1e9b6b))return $dataSystem[_0x337e68(0x365)];return!![];},Window_Base[_0x1d9b69(0x199)][_0x1d9b69(0x3d2)]=function(_0x569205,_0x824e0a,_0x2f325c,_0x28f766,_0x150cc1){const _0x466f93=_0x1d9b69;_0x150cc1=Math[_0x466f93(0xef)](_0x150cc1||0x1,0x1);while(_0x150cc1--){_0x28f766=_0x28f766||this[_0x466f93(0x107)](),this[_0x466f93(0x34c)][_0x466f93(0x2e7)]=0xa0;const _0x150ca1=ColorManager[_0x466f93(0x106)]();this[_0x466f93(0x34c)][_0x466f93(0x3e8)](_0x569205+0x1,_0x824e0a+0x1,_0x2f325c-0x2,_0x28f766-0x2,_0x150ca1),this[_0x466f93(0x34c)][_0x466f93(0x2e7)]=0xff;}},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x280)]=Window_Selectable[_0x1d9b69(0x199)][_0x1d9b69(0x2bf)],Window_Selectable['prototype'][_0x1d9b69(0x2bf)]=function(_0x8c0c01){const _0x513ac3=_0x1d9b69;this[_0x513ac3(0x43a)](),VisuMZ[_0x513ac3(0x222)]['Window_Selectable_initialize'][_0x513ac3(0x422)](this,_0x8c0c01);},Window_Selectable[_0x1d9b69(0x199)][_0x1d9b69(0x43a)]=function(){const _0x5dc0c7=_0x1d9b69;this[_0x5dc0c7(0x375)]={},this[_0x5dc0c7(0x138)]=0xff,this['_newLabelOpacityChange']=VisuMZ['ItemsEquipsCore']['Settings'][_0x5dc0c7(0x321)][_0x5dc0c7(0x108)],this['_newLabelOpacityUpperLimit']=VisuMZ['ItemsEquipsCore'][_0x5dc0c7(0x351)][_0x5dc0c7(0x321)][_0x5dc0c7(0x147)];},Window_Selectable[_0x1d9b69(0x199)]['isShowNew']=function(){return![];},VisuMZ[_0x1d9b69(0x222)]['Window_Selectable_setHelpWindowItem']=Window_Selectable[_0x1d9b69(0x199)][_0x1d9b69(0x335)],Window_Selectable[_0x1d9b69(0x199)]['setHelpWindowItem']=function(_0x33b804){const _0x3161bb=_0x1d9b69;VisuMZ[_0x3161bb(0x222)][_0x3161bb(0x36e)][_0x3161bb(0x422)](this,_0x33b804);if(this[_0x3161bb(0x26b)]())this[_0x3161bb(0x37a)](_0x33b804);},Window_Selectable['prototype'][_0x1d9b69(0x37a)]=function(_0x907b17){const _0x4d86b8=_0x1d9b69;if(!_0x907b17)return;$gameParty[_0x4d86b8(0x1a9)](_0x907b17);let _0x4abe67='';if(DataManager[_0x4d86b8(0x345)](_0x907b17))_0x4abe67='item-%1'[_0x4d86b8(0x13e)](_0x907b17['id']);else{if(DataManager[_0x4d86b8(0x33d)](_0x907b17))_0x4abe67='weapon-%1'['format'](_0x907b17['id']);else{if(DataManager[_0x4d86b8(0x2d3)](_0x907b17))_0x4abe67=_0x4d86b8(0x24c)['format'](_0x907b17['id']);else return;}}const _0x102e80=this[_0x4d86b8(0x375)][_0x4abe67];if(_0x102e80)_0x102e80[_0x4d86b8(0x439)]();},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0xf7)]=Window_Selectable['prototype'][_0x1d9b69(0x1ae)],Window_Selectable[_0x1d9b69(0x199)][_0x1d9b69(0x1ae)]=function(){const _0x2d2e95=_0x1d9b69;this[_0x2d2e95(0xb3)](),VisuMZ[_0x2d2e95(0x222)][_0x2d2e95(0xf7)][_0x2d2e95(0x422)](this);},Window_Selectable[_0x1d9b69(0x199)]['hideNewLabelSprites']=function(){const _0x2db52a=_0x1d9b69;for(const _0x33c543 of Object[_0x2db52a(0x2ac)](this['_newLabelSprites'])){_0x33c543[_0x2db52a(0x439)]();}},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0xe8)]=Window_Selectable['prototype'][_0x1d9b69(0xbc)],Window_Selectable[_0x1d9b69(0x199)][_0x1d9b69(0xbc)]=function(){const _0x5ed30e=_0x1d9b69;this['updateNewLabelOpacity'](),VisuMZ[_0x5ed30e(0x222)][_0x5ed30e(0xe8)]['call'](this);},Window_Selectable[_0x1d9b69(0x199)]['updateNewLabelOpacity']=function(){const _0x15e452=_0x1d9b69;if(!this[_0x15e452(0x26b)]())return;const _0xd1aaed=this['_newLabelOpacityUpperLimit'];this[_0x15e452(0x138)]+=this[_0x15e452(0x196)];(this[_0x15e452(0x138)]>=_0xd1aaed||this['_newLabelOpacity']<=0x0)&&(this['_newLabelOpacityChange']*=-0x1);this[_0x15e452(0x138)]=this[_0x15e452(0x138)][_0x15e452(0x245)](0x0,_0xd1aaed);for(const _0x9260ef of Object[_0x15e452(0x2ac)](this[_0x15e452(0x375)])){_0x9260ef[_0x15e452(0x293)]=this['_newLabelOpacity'];}},Window_Selectable[_0x1d9b69(0x199)][_0x1d9b69(0x421)]=function(_0x3ac2dc){const _0x5d05a0=_0x1d9b69,_0x2b3224=this[_0x5d05a0(0x375)];if(_0x2b3224[_0x3ac2dc])return _0x2b3224[_0x3ac2dc];else{const _0x495342=new Sprite_NewLabel();return _0x2b3224[_0x3ac2dc]=_0x495342,this[_0x5d05a0(0xc9)](_0x495342),_0x495342;}},Window_Selectable['prototype'][_0x1d9b69(0x3bf)]=function(_0x5e101b,_0x39aac2,_0xbd1ba3){const _0xcc0808=_0x1d9b69;let _0x16c802='';if(DataManager[_0xcc0808(0x345)](_0x5e101b))_0x16c802='item-%1'[_0xcc0808(0x13e)](_0x5e101b['id']);else{if(DataManager['isWeapon'](_0x5e101b))_0x16c802='weapon-%1'[_0xcc0808(0x13e)](_0x5e101b['id']);else{if(DataManager[_0xcc0808(0x2d3)](_0x5e101b))_0x16c802=_0xcc0808(0x24c)[_0xcc0808(0x13e)](_0x5e101b['id']);else return;}}const _0x1b4faf=this['createNewLabelSprite'](_0x16c802);_0x1b4faf['move'](_0x39aac2,_0xbd1ba3),_0x1b4faf[_0xcc0808(0x1cd)](),_0x1b4faf[_0xcc0808(0x293)]=this[_0xcc0808(0x138)];},Window_ItemCategory[_0x1d9b69(0x38d)]=VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x351)][_0x1d9b69(0x369)][_0x1d9b69(0x1e8)],Window_ItemCategory[_0x1d9b69(0x2d2)]=['HiddenItemA',_0x1d9b69(0x18f),_0x1d9b69(0x3ed),_0x1d9b69(0x2e3),'AlwaysUsable',_0x1d9b69(0x12c),'FieldUsable','NeverUsable'],VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x1d2)]=Window_ItemCategory['prototype']['initialize'],Window_ItemCategory['prototype'][_0x1d9b69(0x2bf)]=function(_0xff439f){const _0x325ac7=_0x1d9b69;VisuMZ[_0x325ac7(0x222)][_0x325ac7(0x1d2)][_0x325ac7(0x422)](this,_0xff439f),this[_0x325ac7(0x269)](_0xff439f);},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x269)]=function(_0x149c1e){const _0x1cd9d3=_0x1d9b69,_0x4e4d76=new Rectangle(0x0,0x0,_0x149c1e[_0x1cd9d3(0x364)],_0x149c1e[_0x1cd9d3(0x217)]);this[_0x1cd9d3(0x2bb)]=new Window_Base(_0x4e4d76),this[_0x1cd9d3(0x2bb)]['opacity']=0x0,this[_0x1cd9d3(0x35c)](this['_categoryNameWindow']),this[_0x1cd9d3(0x1d5)]();},Window_ItemCategory['prototype'][_0x1d9b69(0x373)]=function(){const _0x18bd6f=_0x1d9b69;return Imported['VisuMZ_0_CoreEngine']&&Window_HorzCommand[_0x18bd6f(0x199)][_0x18bd6f(0x373)][_0x18bd6f(0x422)](this);},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x2d9)]=function(){},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x17e)]=function(){const _0x2f8612=_0x1d9b69;if(!this[_0x2f8612(0x373)]())Window_HorzCommand[_0x2f8612(0x199)][_0x2f8612(0x17e)][_0x2f8612(0x422)](this);},Window_ItemCategory[_0x1d9b69(0x199)]['maxCols']=function(){const _0x139a03=_0x1d9b69;return this[_0x139a03(0x304)]?this[_0x139a03(0x288)]():0x4;},Window_ItemCategory[_0x1d9b69(0x199)]['update']=function(){const _0x56dced=_0x1d9b69;Window_HorzCommand[_0x56dced(0x199)]['update']['call'](this),this['_itemWindow']&&this[_0x56dced(0x39f)]['setCategory'](this[_0x56dced(0xca)]());},Window_ItemCategory[_0x1d9b69(0x199)]['processCursorMoveModernControls']=function(){const _0x3f962b=_0x1d9b69;if(this[_0x3f962b(0x44a)]()){const _0x17e374=this['index']();if(this[_0x3f962b(0x39f)]&&this[_0x3f962b(0x39f)][_0x3f962b(0x29c)]()<=0x1)Input['isRepeated'](_0x3f962b(0x35a))&&this[_0x3f962b(0x41d)](Input['isTriggered'](_0x3f962b(0x35a))),Input[_0x3f962b(0x3e5)](_0x3f962b(0x386))&&this[_0x3f962b(0x163)](Input[_0x3f962b(0x1c6)](_0x3f962b(0x386)));else this[_0x3f962b(0x39f)]&&this['_itemWindow']['maxCols']()>0x1&&(Input[_0x3f962b(0x3e5)]('pagedown')&&!Input[_0x3f962b(0x3b2)]('shift')&&this[_0x3f962b(0x41d)](Input[_0x3f962b(0x1c6)]('pagedown')),Input[_0x3f962b(0x3e5)]('pageup')&&!Input['isPressed'](_0x3f962b(0x385))&&this[_0x3f962b(0x163)](Input[_0x3f962b(0x1c6)]('pageup')));this[_0x3f962b(0x458)]()!==_0x17e374&&this[_0x3f962b(0x1b4)]();}},Window_ItemCategory['prototype'][_0x1d9b69(0xe5)]=function(){const _0x19debc=_0x1d9b69;if(this[_0x19debc(0x373)]())return;Window_HorzCommand[_0x19debc(0x199)][_0x19debc(0xe5)][_0x19debc(0x422)](this);},Window_ItemCategory[_0x1d9b69(0x199)]['isHoverEnabled']=function(){const _0x7eed66=_0x1d9b69;return this[_0x7eed66(0x373)]()?![]:Window_HorzCommand[_0x7eed66(0x199)][_0x7eed66(0x31e)][_0x7eed66(0x422)](this);},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x227)]=function(){const _0x57d85a=_0x1d9b69;if(this[_0x57d85a(0x353)]()){TouchInput[_0x57d85a(0x1c6)]()&&this['onTouchSelect'](!![]);if(TouchInput[_0x57d85a(0x10c)]())this[_0x57d85a(0x115)]();else TouchInput['isCancelled']()&&this[_0x57d85a(0x453)]();}},Window_ItemCategory['prototype'][_0x1d9b69(0x28b)]=function(_0x4c624){const _0x47b73c=_0x1d9b69;this[_0x47b73c(0x373)]()?this['onTouchSelectModern'](!![]):Window_HorzCommand[_0x47b73c(0x199)]['onTouchSelect'][_0x47b73c(0x422)](this,_0x4c624);},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x1be)]=function(_0x1f7a56){const _0x46be28=_0x1d9b69;this[_0x46be28(0x2b1)]=![];if(this[_0x46be28(0x44a)]()){const _0x3a1b71=this[_0x46be28(0x458)](),_0x28884e=this[_0x46be28(0x192)]();_0x28884e>=0x0&&_0x28884e!==this[_0x46be28(0x458)]()&&this[_0x46be28(0x32f)](_0x28884e),_0x1f7a56&&this['index']()!==_0x3a1b71&&this[_0x46be28(0x1b4)]();}},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x12a)]=function(){const _0x2bb48a=_0x1d9b69;this['addItemCategories'](),this[_0x2bb48a(0x32f)](this[_0x2bb48a(0x458)]());},Window_ItemCategory['prototype']['addItemCategories']=function(){const _0x13a758=_0x1d9b69;for(const _0x29bca1 of Window_ItemCategory[_0x13a758(0x38d)]){this['addItemCategory'](_0x29bca1);}},Window_ItemCategory['prototype'][_0x1d9b69(0x457)]=function(_0x209e02){const _0x165b08=_0x1d9b69,_0xd308f1=_0x209e02['Type'],_0x1075d0=_0x209e02[_0x165b08(0x221)],_0x225699=_0x209e02[_0x165b08(0x1e1)]||0x0;if(_0x225699>0x0&&!$gameSwitches[_0x165b08(0x1de)](_0x225699))return;let _0x451c6d='',_0xe1560d=_0x165b08(0x44f),_0x8677fe=_0xd308f1;if(_0xd308f1[_0x165b08(0x356)](/Category:(.*)/i))_0x451c6d=String(RegExp['$1'])[_0x165b08(0x3a0)]();else{if(Window_ItemCategory[_0x165b08(0x2d2)]['includes'](_0xd308f1))_0x451c6d=VisuMZ[_0x165b08(0x222)]['Settings'][_0x165b08(0x369)][_0xd308f1];else{if([_0x165b08(0x3df),_0x165b08(0x3ae)][_0x165b08(0x22a)](_0xd308f1))_0x451c6d=TextManager['item'];else{if(_0xd308f1===_0x165b08(0x264))_0x451c6d=TextManager[_0x165b08(0x1fe)];else{if(_0xd308f1===_0x165b08(0x1d8))_0x451c6d=TextManager[_0x165b08(0x234)];else{if(_0xd308f1===_0x165b08(0x1f3))_0x451c6d=TextManager['armor'];else{if(_0xd308f1['match'](/WTYPE:(\d+)/i))_0x451c6d=$dataSystem[_0x165b08(0x350)][Number(RegExp['$1'])]||'';else{if(_0xd308f1['match'](/ATYPE:(\d+)/i))_0x451c6d=$dataSystem[_0x165b08(0x29e)][Number(RegExp['$1'])]||'';else _0xd308f1[_0x165b08(0x356)](/ETYPE:(\d+)/i)&&(_0x451c6d=$dataSystem[_0x165b08(0x455)][Number(RegExp['$1'])]||'');}}}}}}}_0x1075d0>0x0&&this[_0x165b08(0x456)]()!=='text'&&(_0x451c6d='\x5cI[%1]%2'[_0x165b08(0x13e)](_0x1075d0,_0x451c6d)),this['addCommand'](_0x451c6d,_0xe1560d,!![],_0x8677fe);},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x24a)]=function(){const _0x120569=_0x1d9b69;return VisuMZ[_0x120569(0x222)][_0x120569(0x351)][_0x120569(0x369)][_0x120569(0x294)];},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x2f1)]=function(_0x44abf0){const _0xcaf777=_0x1d9b69,_0x5c9cbf=this[_0xcaf777(0x160)](_0x44abf0);if(_0x5c9cbf==='iconText')this[_0xcaf777(0x3dd)](_0x44abf0);else _0x5c9cbf===_0xcaf777(0xbd)?this[_0xcaf777(0x1fc)](_0x44abf0):Window_HorzCommand[_0xcaf777(0x199)][_0xcaf777(0x2f1)]['call'](this,_0x44abf0);},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x456)]=function(){const _0x4e0fc8=_0x1d9b69;return VisuMZ[_0x4e0fc8(0x222)][_0x4e0fc8(0x351)][_0x4e0fc8(0x369)]['Style'];},Window_ItemCategory[_0x1d9b69(0x199)]['categoryStyleCheck']=function(_0x3c7ab9){const _0x28ca22=_0x1d9b69;if(_0x3c7ab9<0x0)return _0x28ca22(0x29a);const _0xbf1cdf=this[_0x28ca22(0x456)]();if(_0xbf1cdf!==_0x28ca22(0x241))return _0xbf1cdf;else{const _0x1b6103=this['commandName'](_0x3c7ab9);if(_0x1b6103[_0x28ca22(0x356)](/\\I\[(\d+)\]/i)){const _0x2d09f8=this['itemLineRect'](_0x3c7ab9),_0x1c89e4=this[_0x28ca22(0x116)](_0x1b6103)['width'];return _0x1c89e4<=_0x2d09f8[_0x28ca22(0x364)]?_0x28ca22(0x3b9):'icon';}else return _0x28ca22(0x29a);}},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x3dd)]=function(_0x5d316d){const _0x1109aa=_0x1d9b69,_0x27c8a5=this[_0x1109aa(0x1ad)](_0x5d316d),_0x1c3d25=this[_0x1109aa(0x254)](_0x5d316d),_0x30c8f6=this[_0x1109aa(0x116)](_0x1c3d25)[_0x1109aa(0x364)];this[_0x1109aa(0x384)](this[_0x1109aa(0x37b)](_0x5d316d));const _0x54fbff=this[_0x1109aa(0x24a)]();if(_0x54fbff===_0x1109aa(0x35a))this[_0x1109aa(0x18c)](_0x1c3d25,_0x27c8a5['x']+_0x27c8a5['width']-_0x30c8f6,_0x27c8a5['y'],_0x30c8f6);else{if(_0x54fbff===_0x1109aa(0x388)){const _0x53670a=_0x27c8a5['x']+Math['floor']((_0x27c8a5[_0x1109aa(0x364)]-_0x30c8f6)/0x2);this[_0x1109aa(0x18c)](_0x1c3d25,_0x53670a,_0x27c8a5['y'],_0x30c8f6);}else this['drawTextEx'](_0x1c3d25,_0x27c8a5['x'],_0x27c8a5['y'],_0x30c8f6);}},Window_ItemCategory[_0x1d9b69(0x199)]['drawItemStyleIcon']=function(_0x411e34){const _0x3b234c=_0x1d9b69,_0x629ab5=this[_0x3b234c(0x254)](_0x411e34);if(_0x629ab5['match'](/\\I\[(\d+)\]/i)){const _0x5884a4=Number(RegExp['$1'])||0x0,_0xa278d7=this[_0x3b234c(0x1ad)](_0x411e34),_0x36e7a4=_0xa278d7['x']+Math[_0x3b234c(0x21c)]((_0xa278d7['width']-ImageManager[_0x3b234c(0x3b6)])/0x2),_0x5ad502=_0xa278d7['y']+(_0xa278d7[_0x3b234c(0x217)]-ImageManager[_0x3b234c(0x378)])/0x2;this[_0x3b234c(0x18d)](_0x5884a4,_0x36e7a4,_0x5ad502);}},VisuMZ[_0x1d9b69(0x222)]['Window_ItemCategory_setItemWindow']=Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x306)],Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x306)]=function(_0x407a09){const _0x34e1db=_0x1d9b69;VisuMZ[_0x34e1db(0x222)]['Window_ItemCategory_setItemWindow'][_0x34e1db(0x422)](this,_0x407a09),_0x407a09[_0x34e1db(0x15f)]=this;},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x3f7)]=function(){const _0x49559f=_0x1d9b69;Window_HorzCommand['prototype'][_0x49559f(0x3f7)][_0x49559f(0x422)](this);if(this['_categoryNameWindow'])this[_0x49559f(0x1d5)]();},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x1d5)]=function(){const _0x4e5d66=_0x1d9b69,_0x28f72d=this[_0x4e5d66(0x2bb)];_0x28f72d['contents'][_0x4e5d66(0x153)]();const _0x47ba4c=this[_0x4e5d66(0x160)](this['index']());if(_0x47ba4c===_0x4e5d66(0xbd)){const _0x3146cd=this['itemLineRect'](this[_0x4e5d66(0x458)]());let _0x5edd58=this[_0x4e5d66(0x254)](this['index']());_0x5edd58=_0x5edd58[_0x4e5d66(0x2a3)](/\\I\[(\d+)\]/gi,''),_0x28f72d[_0x4e5d66(0x1c3)](),this[_0x4e5d66(0x256)](_0x5edd58,_0x3146cd),this[_0x4e5d66(0x389)](_0x5edd58,_0x3146cd),this[_0x4e5d66(0xae)](_0x5edd58,_0x3146cd);}},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0x256)]=function(_0x35885d,_0x5829da){},Window_ItemCategory[_0x1d9b69(0x199)]['categoryNameWindowDrawText']=function(_0x275606,_0x28a985){const _0x254fa1=_0x1d9b69,_0x30ba80=this[_0x254fa1(0x2bb)];_0x30ba80[_0x254fa1(0x273)](_0x275606,0x0,_0x28a985['y'],_0x30ba80[_0x254fa1(0x2e6)],'center');},Window_ItemCategory[_0x1d9b69(0x199)][_0x1d9b69(0xae)]=function(_0x354c9b,_0x266cc6){const _0x1b69e2=_0x1d9b69,_0x55593e=this[_0x1b69e2(0x2bb)],_0x5c9210=$gameSystem[_0x1b69e2(0x22c)](),_0x33396a=_0x266cc6['x']+Math[_0x1b69e2(0x21c)](_0x266cc6[_0x1b69e2(0x364)]/0x2)+_0x5c9210;_0x55593e['x']=_0x55593e[_0x1b69e2(0x364)]/-0x2+_0x33396a,_0x55593e['y']=Math[_0x1b69e2(0x21c)](_0x266cc6[_0x1b69e2(0x217)]/0x2);},Window_ItemList['prototype']['processCursorMoveModernControls']=function(){const _0xae7012=_0x1d9b69;if(this[_0xae7012(0x44a)]()){const _0xfbd049=this[_0xae7012(0x458)]();if(this[_0xae7012(0x29c)]()<=0x1)!this[_0xae7012(0x224)](_0xae7012(0x1a2))&&Input[_0xae7012(0x1c6)]('pagedown')&&this['cursorPagedown'](),!this['isHandled'](_0xae7012(0x322))&&Input[_0xae7012(0x1c6)](_0xae7012(0x322))&&this[_0xae7012(0x105)]();else this[_0xae7012(0x29c)]()>0x1&&(Input['isRepeated'](_0xae7012(0x35a))&&this[_0xae7012(0x41d)](Input['isTriggered'](_0xae7012(0x35a))),Input[_0xae7012(0x3e5)](_0xae7012(0x386))&&this[_0xae7012(0x163)](Input[_0xae7012(0x1c6)](_0xae7012(0x386))),this['limitedPageUpDownSceneCheck']()?(Input[_0xae7012(0x1c6)](_0xae7012(0x1a2))&&Input['isPressed'](_0xae7012(0x385))&&this[_0xae7012(0x2cb)](),Input[_0xae7012(0x1c6)](_0xae7012(0x322))&&Input['isPressed'](_0xae7012(0x385))&&this[_0xae7012(0x105)]()):(Input[_0xae7012(0x1c6)](_0xae7012(0x1a2))&&this[_0xae7012(0x2cb)](),Input['isTriggered'](_0xae7012(0x322))&&this[_0xae7012(0x105)]()));Input[_0xae7012(0x3e5)]('down')&&(Input[_0xae7012(0x3b2)]('shift')&&this[_0xae7012(0x265)]()?this['cursorPagedown']():this[_0xae7012(0x175)](Input[_0xae7012(0x1c6)](_0xae7012(0x2eb)))),Input[_0xae7012(0x3e5)]('up')&&(Input[_0xae7012(0x3b2)]('shift')&&this[_0xae7012(0x265)]()?this[_0xae7012(0x105)]():this[_0xae7012(0x2ef)](Input['isTriggered']('up'))),Imported[_0xae7012(0x41a)]&&this[_0xae7012(0x2d9)](),this[_0xae7012(0x458)]()!==_0xfbd049&&this['playCursorSound']();}},Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0xcd)]=function(){const _0x50b008=_0x1d9b69,_0x475cfc=SceneManager[_0x50b008(0x23e)],_0x2ee938=[Scene_Item,Scene_Shop];return _0x2ee938['includes'](_0x475cfc[_0x50b008(0x1b6)]);},Window_ItemList['prototype'][_0x1d9b69(0x42d)]=function(){const _0x248356=_0x1d9b69;Window_Selectable[_0x248356(0x199)][_0x248356(0x42d)][_0x248356(0x422)](this),this[_0x248356(0x15f)]&&this[_0x248356(0x15f)][_0x248356(0x373)]()&&this[_0x248356(0x15f)]['activate']();},Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x3d8)]=function(){const _0x2e9138=_0x1d9b69;Window_Selectable['prototype'][_0x2e9138(0x3d8)][_0x2e9138(0x422)](this),this[_0x2e9138(0x15f)]&&this[_0x2e9138(0x15f)][_0x2e9138(0x373)]()&&this['_categoryWindow'][_0x2e9138(0x3d8)]();},Window_ItemList['prototype'][_0x1d9b69(0x398)]=function(_0xf0de89){const _0x5794d7=_0x1d9b69;this['_category']!==_0xf0de89&&(this[_0x5794d7(0x198)]=_0xf0de89,this[_0x5794d7(0x1ae)](),this['_categoryWindow']&&this['_categoryWindow'][_0x5794d7(0x373)]()?this[_0x5794d7(0x3fe)](0x0):this[_0x5794d7(0x225)](0x0,0x0));},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x286)]=Window_ItemList['prototype'][_0x1d9b69(0x29c)],Window_ItemList['prototype']['maxCols']=function(){const _0x13c539=_0x1d9b69;if(SceneManager[_0x13c539(0x23e)]['constructor']===Scene_Battle)return VisuMZ[_0x13c539(0x222)][_0x13c539(0x286)][_0x13c539(0x422)](this);else return SceneManager[_0x13c539(0x23e)]['constructor']===Scene_Map?VisuMZ['ItemsEquipsCore'][_0x13c539(0x286)]['call'](this):VisuMZ[_0x13c539(0x222)]['Settings'][_0x13c539(0x312)][_0x13c539(0x272)];},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2bd)]=Window_ItemList['prototype'][_0x1d9b69(0x2f7)],Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x2f7)]=function(){const _0x43b604=_0x1d9b69;return this[_0x43b604(0x29c)]()<=0x1?Window_Selectable['prototype'][_0x43b604(0x2f7)][_0x43b604(0x422)](this):VisuMZ['ItemsEquipsCore']['Window_ItemList_colSpacing']['call'](this);},Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x22a)]=function(_0x5b4f2d){const _0x156d9d=_0x1d9b69;switch(this[_0x156d9d(0x198)]){case _0x156d9d(0x3df):return DataManager[_0x156d9d(0x345)](_0x5b4f2d);case _0x156d9d(0x3ae):return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&_0x5b4f2d[_0x156d9d(0x2cf)]===0x1;case _0x156d9d(0x264):return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&_0x5b4f2d['itypeId']===0x2;case _0x156d9d(0x12f):return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&_0x5b4f2d[_0x156d9d(0x2cf)]===0x3;case _0x156d9d(0x18f):return DataManager['isItem'](_0x5b4f2d)&&_0x5b4f2d[_0x156d9d(0x2cf)]===0x4;case _0x156d9d(0x2e3):return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&_0x5b4f2d['consumable'];case'Nonconsumable':return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&!_0x5b4f2d[_0x156d9d(0x307)];case _0x156d9d(0x1c5):return DataManager['isItem'](_0x5b4f2d)&&[0x0][_0x156d9d(0x22a)](_0x5b4f2d[_0x156d9d(0x347)]);case _0x156d9d(0x12c):return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&[0x0,0x1][_0x156d9d(0x22a)](_0x5b4f2d['occasion']);case _0x156d9d(0x359):return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&[0x0,0x2]['includes'](_0x5b4f2d[_0x156d9d(0x347)]);case'NeverUsable':return DataManager[_0x156d9d(0x345)](_0x5b4f2d)&&[0x3]['includes'](_0x5b4f2d[_0x156d9d(0x347)]);case _0x156d9d(0x1d8):return DataManager[_0x156d9d(0x33d)](_0x5b4f2d);case'AllArmors':return DataManager['isArmor'](_0x5b4f2d);default:if(this[_0x156d9d(0x198)][_0x156d9d(0x356)](/WTYPE:(\d+)/i))return DataManager[_0x156d9d(0x33d)](_0x5b4f2d)&&_0x5b4f2d['wtypeId']===Number(RegExp['$1']);else{if(this['_category'][_0x156d9d(0x356)](/WTYPE:(.*)/i)){const _0x20039f=$dataSystem[_0x156d9d(0x350)]['indexOf'](String(RegExp['$1'])[_0x156d9d(0x3a0)]());return DataManager['isWeapon'](_0x5b4f2d)&&_0x5b4f2d['wtypeId']===_0x20039f;}else{if(this[_0x156d9d(0x198)][_0x156d9d(0x356)](/ATYPE:(\d+)/i))return DataManager[_0x156d9d(0x2d3)](_0x5b4f2d)&&_0x5b4f2d[_0x156d9d(0x309)]===Number(RegExp['$1']);else{if(this[_0x156d9d(0x198)][_0x156d9d(0x356)](/ATYPE:(.*)/i)){const _0x4f1ebc=$dataSystem[_0x156d9d(0x29e)][_0x156d9d(0x436)](String(RegExp['$1'])[_0x156d9d(0x3a0)]());return DataManager['isArmor'](_0x5b4f2d)&&_0x5b4f2d[_0x156d9d(0x309)]===_0x4f1ebc;}else{if(this[_0x156d9d(0x198)][_0x156d9d(0x356)](/ETYPE:(\d+)/i))return!!_0x5b4f2d&&_0x5b4f2d['etypeId']===Number(RegExp['$1']);else{if(this['_category'][_0x156d9d(0x356)](/ETYPE:(.*)/i)){const _0x129f77=$dataSystem[_0x156d9d(0x455)][_0x156d9d(0x436)](String(RegExp['$1'])[_0x156d9d(0x3a0)]());return DataManager['isArmor'](_0x5b4f2d)&&_0x5b4f2d[_0x156d9d(0x171)]===_0x129f77;}else{if(this[_0x156d9d(0x198)][_0x156d9d(0x356)](/Category:(.*)/i))return!!_0x5b4f2d&&_0x5b4f2d[_0x156d9d(0x212)][_0x156d9d(0x22a)](String(RegExp['$1'])[_0x156d9d(0x20d)]()['trim']());}}}}}}}return![];},Window_ItemList['prototype'][_0x1d9b69(0x26b)]=function(){return!![];},VisuMZ[_0x1d9b69(0x222)]['Window_ItemList_drawItem']=Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x2f1)],Window_ItemList['prototype'][_0x1d9b69(0x2f1)]=function(_0x2d92e9){const _0x5f5015=_0x1d9b69;VisuMZ[_0x5f5015(0x222)][_0x5f5015(0x113)][_0x5f5015(0x422)](this,_0x2d92e9),this['placeItemNewLabel'](_0x2d92e9);},Window_ItemList[_0x1d9b69(0x199)]['drawItemNumber']=function(_0x27f3a5,_0x4ac314,_0x50b340,_0x534f5d){const _0x19ec85=_0x1d9b69;Window_Selectable['prototype'][_0x19ec85(0x17d)][_0x19ec85(0x422)](this,_0x27f3a5,_0x4ac314,_0x50b340,_0x534f5d);},Window_ItemList['prototype'][_0x1d9b69(0x424)]=function(_0x7adf79){const _0x53adf0=_0x1d9b69,_0x1642e8=this[_0x53adf0(0x210)](_0x7adf79);if(!_0x1642e8||!this[_0x53adf0(0x26b)]())return;if(!$gameParty['isNewItem'](_0x1642e8))return;const _0x46c2bb=this[_0x53adf0(0x1ad)](_0x7adf79),_0x3cf0ef=_0x46c2bb['x'],_0x5638f3=_0x46c2bb['y']+(this[_0x53adf0(0x107)]()-ImageManager[_0x53adf0(0x378)])/0x2,_0x34e7ae=VisuMZ[_0x53adf0(0x222)][_0x53adf0(0x351)][_0x53adf0(0x321)]['OffsetX'],_0x53af1b=VisuMZ['ItemsEquipsCore'][_0x53adf0(0x351)][_0x53adf0(0x321)][_0x53adf0(0x3ac)];this[_0x53adf0(0x3bf)](_0x1642e8,_0x3cf0ef+_0x34e7ae,_0x5638f3+_0x53af1b);},Window_ItemList['prototype'][_0x1d9b69(0x2b5)]=function(_0x325eb3){this['_statusWindow']=_0x325eb3,this['callUpdateHelp']();},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x2a9)]=Window_ItemList[_0x1d9b69(0x199)][_0x1d9b69(0x1cb)],Window_ItemList['prototype'][_0x1d9b69(0x1cb)]=function(){const _0x1c399b=_0x1d9b69;VisuMZ[_0x1c399b(0x222)][_0x1c399b(0x2a9)][_0x1c399b(0x422)](this),this[_0x1c399b(0x1e4)]&&this[_0x1c399b(0x1e4)][_0x1c399b(0x1b6)]===Window_ShopStatus&&this[_0x1c399b(0x1e4)]['setItem'](this[_0x1c399b(0x158)]());},Window_BattleItem[_0x1d9b69(0x199)][_0x1d9b69(0x3b3)]=function(_0x161ec7){const _0x5f552e=_0x1d9b69;return BattleManager['actor']()?BattleManager[_0x5f552e(0x376)]()[_0x5f552e(0x204)](_0x161ec7):Window_ItemList[_0x5f552e(0x199)]['isEnabled']['call'](this,_0x161ec7);},Window_EventItem[_0x1d9b69(0x199)][_0x1d9b69(0x26b)]=function(){return![];},Window_EquipStatus[_0x1d9b69(0x199)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x58d878=_0x1d9b69;return VisuMZ[_0x58d878(0x222)][_0x58d878(0x351)][_0x58d878(0x190)][_0x58d878(0x149)];},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0x3d7)]=Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1ae)],Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1ae)]=function(){const _0x389e7f=_0x1d9b69;this['hideAdditionalSprites'](),this[_0x389e7f(0x1c3)]();if(this[_0x389e7f(0x136)])this[_0x389e7f(0x136)]['refresh']();this[_0x389e7f(0x434)]()?this[_0x389e7f(0x3d4)]():VisuMZ[_0x389e7f(0x222)][_0x389e7f(0x3d7)][_0x389e7f(0x422)](this);},Window_EquipStatus[_0x1d9b69(0x199)]['prepareRefreshItemsEquipsCoreLayout']=function(){const _0x57b96a=_0x1d9b69;this[_0x57b96a(0x337)][_0x57b96a(0x153)]();if(!this[_0x57b96a(0x136)])return;if(this[_0x57b96a(0x2c8)]()){const _0x1ff221=ImageManager['loadPicture'](this[_0x57b96a(0x136)][_0x57b96a(0x299)]());_0x1ff221[_0x57b96a(0xc8)](this[_0x57b96a(0x216)][_0x57b96a(0x2ae)](this));}else this[_0x57b96a(0x3fb)]();},Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0x2c8)]=function(){const _0x482b92=_0x1d9b69;return Imported[_0x482b92(0x10b)]&&this['_actor'][_0x482b92(0x299)]()!==''&&VisuMZ[_0x482b92(0x222)]['Settings'][_0x482b92(0x190)][_0x482b92(0x2a1)];},Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0x216)]=function(){const _0x23a5f7=_0x1d9b69;VisuMZ[_0x23a5f7(0x222)][_0x23a5f7(0x351)][_0x23a5f7(0x190)][_0x23a5f7(0x37f)][_0x23a5f7(0x422)](this),this[_0x23a5f7(0x1b5)]();},Window_EquipStatus['prototype'][_0x1d9b69(0x3fb)]=function(){const _0x55c302=_0x1d9b69;VisuMZ[_0x55c302(0x222)][_0x55c302(0x351)][_0x55c302(0x190)][_0x55c302(0x2dc)][_0x55c302(0x422)](this),this['drawParamsItemsEquipsCore']();},Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1b5)]=function(){const _0x377e87=_0x1d9b69;this[_0x377e87(0x1c3)](),VisuMZ['ItemsEquipsCore']['Settings'][_0x377e87(0x190)]['DrawParamJS'][_0x377e87(0x422)](this);},Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0x374)]=function(_0x3259c1,_0x451fea,_0x49d948,_0x13c219,_0x4deb29){const _0x530717=_0x1d9b69,_0x2f523f=ImageManager[_0x530717(0x3d1)](_0x3259c1[_0x530717(0x299)]()),_0x44cef8=this['innerWidth']-_0x2f523f['width'];_0x451fea+=_0x44cef8/0x2;if(_0x44cef8<0x0)_0x13c219-=_0x44cef8;Window_StatusBase[_0x530717(0x199)][_0x530717(0x374)][_0x530717(0x422)](this,_0x3259c1,_0x451fea,_0x49d948,_0x13c219,_0x4deb29);},Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3a8)]=function(){const _0x548494=_0x1d9b69;return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x548494(0x1ab)][_0x548494(0x351)][_0x548494(0x1e2)][_0x548494(0x3e1)]:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus['prototype'][_0x1d9b69(0x2fe)]=function(){const _0x54196e=_0x1d9b69;return VisuMZ['ItemsEquipsCore'][_0x54196e(0x351)][_0x54196e(0x190)][_0x54196e(0x32d)];},Window_EquipStatus[_0x1d9b69(0x199)][_0x1d9b69(0xf9)]=function(){const _0x1258b2=_0x1d9b69;return Imported[_0x1258b2(0x41a)]&&VisuMZ[_0x1258b2(0x1ab)][_0x1258b2(0x351)][_0x1258b2(0x1e2)][_0x1258b2(0x317)];},Window_EquipStatus['prototype']['drawUpdatedParamName']=function(_0x3b2eb6,_0x367fe6,_0x40e7ab,_0x4d11a2){const _0x30dc93=_0x1d9b69,_0x196a0d=this[_0x30dc93(0xba)]();Imported[_0x30dc93(0x41a)]?this[_0x30dc93(0x3b7)](_0x367fe6+_0x196a0d,_0x40e7ab,_0x4d11a2,_0x3b2eb6,![]):this[_0x30dc93(0x273)](TextManager[_0x30dc93(0x154)](_0x3b2eb6),_0x367fe6+_0x196a0d,_0x40e7ab,_0x4d11a2);},Window_EquipStatus[_0x1d9b69(0x199)]['drawUpdatedBeforeParamValue']=function(_0x5e1ec2,_0x2b2bdd,_0x25bf8a,_0x2d73ce){const _0x507d8f=_0x1d9b69,_0x59fa27=this[_0x507d8f(0xba)]();let _0x447573=0x0;Imported[_0x507d8f(0x41a)]?_0x447573=this[_0x507d8f(0x136)][_0x507d8f(0x109)](_0x5e1ec2,!![]):_0x447573=this['_actor'][_0x507d8f(0x154)](_0x5e1ec2);const _0x1d1206=_0x447573;this[_0x507d8f(0x273)](_0x447573,_0x2b2bdd,_0x25bf8a,_0x2d73ce-_0x59fa27,_0x507d8f(0x35a));},Window_EquipStatus[_0x1d9b69(0x199)]['drawUpdatedAfterParamValue']=function(_0x1d3340,_0x4763d2,_0x545fef,_0x20deac){const _0x7b50ac=_0x1d9b69,_0x60c8dd=this[_0x7b50ac(0xba)]();let _0x164cc=0x0,_0x374dad=0x0,_0x322aa2='';if(this[_0x7b50ac(0x3ff)]){Imported[_0x7b50ac(0x41a)]?(_0x164cc=this[_0x7b50ac(0x136)]['paramValueByName'](_0x1d3340,![]),_0x374dad=this[_0x7b50ac(0x3ff)][_0x7b50ac(0x109)](_0x1d3340,![]),_0x322aa2=this['_tempActor']['paramValueByName'](_0x1d3340,!![])):(_0x164cc=this[_0x7b50ac(0x136)][_0x7b50ac(0x154)](_0x1d3340),_0x374dad=this[_0x7b50ac(0x3ff)][_0x7b50ac(0x154)](_0x1d3340),_0x322aa2=this[_0x7b50ac(0x3ff)][_0x7b50ac(0x154)](_0x1d3340));const _0x2c937b=_0x164cc,_0xd56fe7=_0x374dad;diffValue=_0xd56fe7-_0x2c937b,this[_0x7b50ac(0x120)](ColorManager['paramchangeTextColor'](diffValue)),this['drawText'](_0x322aa2,_0x4763d2,_0x545fef,_0x20deac-_0x60c8dd,'right');}},Window_EquipStatus[_0x1d9b69(0x199)]['drawUpdatedParamValueDiff']=function(_0x1d986d,_0x458de8,_0xb1e37f,_0x382448){const _0x464ab0=_0x1d9b69,_0x2c6afc=this['itemPadding']();let _0x4c56ba=0x0,_0x97cfa7=0x0,_0x23f49c=![];if(this[_0x464ab0(0x3ff)]){Imported[_0x464ab0(0x41a)]?(_0x4c56ba=this['_actor']['paramValueByName'](_0x1d986d,![]),_0x97cfa7=this[_0x464ab0(0x3ff)][_0x464ab0(0x109)](_0x1d986d,![]),_0x23f49c=String(this[_0x464ab0(0x136)][_0x464ab0(0x109)](_0x1d986d,!![]))[_0x464ab0(0x356)](/([%％])/i)):(_0x4c56ba=this['_actor'][_0x464ab0(0x154)](_0x1d986d),_0x97cfa7=this[_0x464ab0(0x3ff)]['param'](_0x1d986d),_0x23f49c=_0x4c56ba%0x1!==0x0||_0x97cfa7%0x1!==0x0);const _0x1cba6a=_0x4c56ba,_0x572989=_0x97cfa7,_0x3ae6d3=_0x572989-_0x1cba6a;let _0x25fed6=_0x3ae6d3;if(_0x23f49c)_0x25fed6=Math['round'](_0x3ae6d3*0x64)+'%';_0x3ae6d3!==0x0&&(this[_0x464ab0(0x120)](ColorManager[_0x464ab0(0x22d)](_0x3ae6d3)),_0x25fed6=(_0x3ae6d3>0x0?'(+%1)':_0x464ab0(0x3be))[_0x464ab0(0x13e)](_0x25fed6),this[_0x464ab0(0x273)](_0x25fed6,_0x458de8+_0x2c6afc,_0xb1e37f,_0x382448,_0x464ab0(0x386)));}},Window_EquipStatus['prototype'][_0x1d9b69(0x3d2)]=function(_0x30758c,_0x436de2,_0x1e2fca,_0x59890c,_0x282627){const _0x592b71=_0x1d9b69;if(VisuMZ['ItemsEquipsCore'][_0x592b71(0x351)]['EquipScene'][_0x592b71(0x15d)]===![])return;_0x282627=Math['max'](_0x282627||0x1,0x1);while(_0x282627--){_0x59890c=_0x59890c||this[_0x592b71(0x107)](),this[_0x592b71(0x337)][_0x592b71(0x2e7)]=0xa0;const _0x53f528=ColorManager['getItemsEquipsCoreBackColor2']();this[_0x592b71(0x337)][_0x592b71(0x3e8)](_0x30758c+0x1,_0x436de2+0x1,_0x1e2fca-0x2,_0x59890c-0x2,_0x53f528),this[_0x592b71(0x337)][_0x592b71(0x2e7)]=0xff;}},ColorManager[_0x1d9b69(0x3a1)]=function(){const _0x5dfe81=_0x1d9b69,_0x421875=VisuMZ[_0x5dfe81(0x222)][_0x5dfe81(0x351)][_0x5dfe81(0x190)];let _0x3979cf=_0x421875['BackRectColor']!==undefined?_0x421875['BackRectColor']:0x13;return ColorManager[_0x5dfe81(0x3f4)](_0x3979cf);},VisuMZ['ItemsEquipsCore']['Window_EquipCommand_initialize']=Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2bf)],Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2bf)]=function(_0x29e745){const _0x3ebbf7=_0x1d9b69;VisuMZ[_0x3ebbf7(0x222)][_0x3ebbf7(0x271)][_0x3ebbf7(0x422)](this,_0x29e745),this[_0x3ebbf7(0x11d)](_0x29e745);},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x11d)]=function(_0x50a75d){const _0x324d18=_0x1d9b69,_0x147000=new Rectangle(0x0,0x0,_0x50a75d[_0x324d18(0x364)],_0x50a75d['height']);this[_0x324d18(0x381)]=new Window_Base(_0x147000),this[_0x324d18(0x381)]['opacity']=0x0,this['addChild'](this[_0x324d18(0x381)]),this['updateCommandNameWindow']();},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x3f7)]=function(){const _0x169662=_0x1d9b69;Window_HorzCommand[_0x169662(0x199)][_0x169662(0x3f7)]['call'](this);if(this['_commandNameWindow'])this[_0x169662(0xbe)]();},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0xbe)]=function(){const _0x207956=_0x1d9b69,_0xd572ca=this['_commandNameWindow'];_0xd572ca[_0x207956(0x337)][_0x207956(0x153)]();const _0x307dcf=this[_0x207956(0xda)](this[_0x207956(0x458)]());if(_0x307dcf===_0x207956(0xbd)){const _0x1a6cb4=this[_0x207956(0x1ad)](this['index']());let _0x673c94=this[_0x207956(0x254)](this[_0x207956(0x458)]());_0x673c94=_0x673c94[_0x207956(0x2a3)](/\\I\[(\d+)\]/gi,''),_0xd572ca['resetFontSettings'](),this[_0x207956(0x31d)](_0x673c94,_0x1a6cb4),this[_0x207956(0x2b8)](_0x673c94,_0x1a6cb4),this[_0x207956(0x12e)](_0x673c94,_0x1a6cb4);}},Window_EquipCommand['prototype'][_0x1d9b69(0x31d)]=function(_0x44d923,_0x121ecd){},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2b8)]=function(_0x46400a,_0x24a70a){const _0x21ca53=_0x1d9b69,_0x581351=this['_commandNameWindow'];_0x581351['drawText'](_0x46400a,0x0,_0x24a70a['y'],_0x581351[_0x21ca53(0x2e6)],_0x21ca53(0x388));},Window_EquipCommand[_0x1d9b69(0x199)]['commandNameWindowCenter']=function(_0x209c81,_0x296f73){const _0x422495=_0x1d9b69,_0x15956e=this[_0x422495(0x381)],_0x65f51c=$gameSystem[_0x422495(0x22c)](),_0x10ddd8=_0x296f73['x']+Math[_0x422495(0x21c)](_0x296f73['width']/0x2)+_0x65f51c;_0x15956e['x']=_0x15956e[_0x422495(0x364)]/-0x2+_0x10ddd8,_0x15956e['y']=Math[_0x422495(0x21c)](_0x296f73[_0x422495(0x217)]/0x2);},Window_EquipCommand[_0x1d9b69(0x199)]['isUseModernControls']=function(){const _0x3aaa49=_0x1d9b69;return Imported[_0x3aaa49(0x41a)]&&Window_HorzCommand[_0x3aaa49(0x199)][_0x3aaa49(0x373)][_0x3aaa49(0x422)](this);},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x17e)]=function(){const _0x5540f2=_0x1d9b69;if(this[_0x5540f2(0x276)]()===_0x5540f2(0x2fc))Window_HorzCommand['prototype'][_0x5540f2(0x17e)][_0x5540f2(0x422)](this);},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x42b)]=function(){const _0x1476c3=_0x1d9b69;!this['processCursorSpecialCheckModernControls']()&&Window_HorzCommand['prototype'][_0x1476c3(0x42b)][_0x1476c3(0x422)](this);},Window_EquipCommand['prototype'][_0x1d9b69(0x29b)]=function(){const _0x5b1763=_0x1d9b69;if(!this[_0x5b1763(0x44a)]())return![];if(SceneManager[_0x5b1763(0x23e)][_0x5b1763(0x1b6)]!==Scene_Equip)return![];return Input[_0x5b1763(0x1c6)](_0x5b1763(0x2eb))&&(this[_0x5b1763(0x1b4)](),SceneManager['_scene'][_0x5b1763(0x155)](),SceneManager[_0x5b1763(0x23e)][_0x5b1763(0x426)][_0x5b1763(0x3fe)](-0x1)),![];},Window_EquipCommand['prototype'][_0x1d9b69(0x29c)]=function(){const _0x7ad89d=_0x1d9b69;return this[_0x7ad89d(0x304)]?this['_list'][_0x7ad89d(0x440)]:0x3;},Window_EquipCommand[_0x1d9b69(0x199)]['processTouchModernControls']=function(){const _0x30bf9f=_0x1d9b69;if(this[_0x30bf9f(0x12b)]()&&this['visible']&&SceneManager[_0x30bf9f(0x23e)]['constructor']===Scene_Equip){if(this['isHoverEnabled']()&&TouchInput['isHovered']())this[_0x30bf9f(0x23a)](![]);else TouchInput[_0x30bf9f(0x1c6)]()&&this[_0x30bf9f(0x23a)](!![]);TouchInput['isClicked']()&&this['onTouchOk']();}},Window_EquipCommand[_0x1d9b69(0x199)]['onTouchSelectModernControls']=function(_0x5a4c4b){const _0xb1fdfc=_0x1d9b69;this[_0xb1fdfc(0x2b1)]=![];const _0x31c763=this[_0xb1fdfc(0x458)](),_0x4f6377=this[_0xb1fdfc(0x192)](),_0x33c35a=SceneManager[_0xb1fdfc(0x23e)][_0xb1fdfc(0x426)];if(_0x33c35a['isOpen']()&&_0x33c35a['visible']){if(_0x4f6377>=0x0)_0x4f6377===this[_0xb1fdfc(0x458)]()&&(this[_0xb1fdfc(0x2b1)]=!![]),this[_0xb1fdfc(0x42d)](),this['select'](_0x4f6377);else _0x33c35a[_0xb1fdfc(0x192)]()>=0x0&&(this[_0xb1fdfc(0x3d8)](),this[_0xb1fdfc(0x239)]());}_0x5a4c4b&&this['index']()!==_0x31c763&&this['playCursorSound']();},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x12a)]=function(){const _0x573066=_0x1d9b69;this[_0x573066(0x1c7)](),this[_0x573066(0xdc)](),this[_0x573066(0x3e0)]();},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x1ae)]=function(){const _0x59263b=_0x1d9b69;Window_HorzCommand[_0x59263b(0x199)]['refresh'][_0x59263b(0x422)](this),this['refreshCursor']();},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x1c7)]=function(){const _0x355347=_0x1d9b69;if(!this['isEquipCommandAdded']())return;const _0x1a7879=this['commandStyle'](),_0x42fef1=VisuMZ[_0x355347(0x222)][_0x355347(0x351)][_0x355347(0x190)][_0x355347(0x3a5)],_0x38cd2e=_0x1a7879===_0x355347(0x29a)?TextManager[_0x355347(0x2c6)]:_0x355347(0x355)[_0x355347(0x13e)](_0x42fef1,TextManager[_0x355347(0x2c6)]),_0x577eaa=this[_0x355347(0xd3)]();this[_0x355347(0x25f)](_0x38cd2e,_0x355347(0x2fc),_0x577eaa);},Window_EquipCommand[_0x1d9b69(0x199)]['isEquipCommandAdded']=function(){const _0x2565de=_0x1d9b69;return!this[_0x2565de(0x373)]();},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0xd3)]=function(){return!![];},Window_EquipCommand[_0x1d9b69(0x199)]['addOptimizeCommand']=function(){const _0x3b54ef=_0x1d9b69;if(!this[_0x3b54ef(0x336)]())return;const _0x19cd4c=this[_0x3b54ef(0x372)](),_0x24ce22=VisuMZ['ItemsEquipsCore'][_0x3b54ef(0x351)][_0x3b54ef(0x190)][_0x3b54ef(0x1d9)],_0xbce2cf=_0x19cd4c===_0x3b54ef(0x29a)?TextManager[_0x3b54ef(0x13d)]:_0x3b54ef(0x355)[_0x3b54ef(0x13e)](_0x24ce22,TextManager[_0x3b54ef(0x13d)]),_0x4caea7=this[_0x3b54ef(0x2b2)]();this[_0x3b54ef(0x25f)](_0xbce2cf,_0x3b54ef(0x13d),_0x4caea7);},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x336)]=function(){const _0xb7549e=_0x1d9b69;return VisuMZ[_0xb7549e(0x222)]['Settings'][_0xb7549e(0x190)][_0xb7549e(0x223)];},Window_EquipCommand['prototype'][_0x1d9b69(0x2b2)]=function(){return!![];},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x3e0)]=function(){const _0xd9bfe8=_0x1d9b69;if(!this[_0xd9bfe8(0x169)]())return;const _0x449ca5=this[_0xd9bfe8(0x372)](),_0x27b4a7=VisuMZ[_0xd9bfe8(0x222)]['Settings']['EquipScene'][_0xd9bfe8(0x1b8)],_0x1e7671=_0x449ca5==='text'?TextManager['clear']:_0xd9bfe8(0x355)[_0xd9bfe8(0x13e)](_0x27b4a7,TextManager['clear']),_0x3c9464=this[_0xd9bfe8(0x3ce)]();this[_0xd9bfe8(0x25f)](_0x1e7671,_0xd9bfe8(0x153),_0x3c9464);},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x169)]=function(){const _0x46c9ec=_0x1d9b69;return VisuMZ[_0x46c9ec(0x222)][_0x46c9ec(0x351)][_0x46c9ec(0x190)][_0x46c9ec(0x438)];},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x3ce)]=function(){return!![];},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x24a)]=function(){const _0x224e70=_0x1d9b69;return VisuMZ[_0x224e70(0x222)][_0x224e70(0x351)][_0x224e70(0x190)][_0x224e70(0x414)];},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2f1)]=function(_0x52cf06){const _0x137fbe=_0x1d9b69,_0x15b537=this[_0x137fbe(0xda)](_0x52cf06);if(_0x15b537===_0x137fbe(0x3b9))this[_0x137fbe(0x3dd)](_0x52cf06);else _0x15b537===_0x137fbe(0xbd)?this['drawItemStyleIcon'](_0x52cf06):Window_HorzCommand[_0x137fbe(0x199)][_0x137fbe(0x2f1)][_0x137fbe(0x422)](this,_0x52cf06);},Window_EquipCommand['prototype'][_0x1d9b69(0x372)]=function(){const _0x5f221a=_0x1d9b69;return VisuMZ['ItemsEquipsCore'][_0x5f221a(0x351)][_0x5f221a(0x190)][_0x5f221a(0x2c3)];},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0xda)]=function(_0x3d5f62){const _0x4f15f3=_0x1d9b69;if(_0x3d5f62<0x0)return _0x4f15f3(0x29a);const _0x20b5f7=this[_0x4f15f3(0x372)]();if(_0x20b5f7!==_0x4f15f3(0x241))return _0x20b5f7;else{if(this['maxItems']()>0x0){const _0xb58ce0=this['commandName'](_0x3d5f62);if(_0xb58ce0[_0x4f15f3(0x356)](/\\I\[(\d+)\]/i)){const _0x427961=this[_0x4f15f3(0x1ad)](_0x3d5f62),_0x4cd9a1=this[_0x4f15f3(0x116)](_0xb58ce0)[_0x4f15f3(0x364)];return _0x4cd9a1<=_0x427961['width']?_0x4f15f3(0x3b9):'icon';}}}return _0x4f15f3(0x29a);},Window_EquipCommand['prototype'][_0x1d9b69(0x3dd)]=function(_0x50436b){const _0x1fed80=_0x1d9b69,_0x5c7565=this[_0x1fed80(0x1ad)](_0x50436b),_0x4ea98d=this[_0x1fed80(0x254)](_0x50436b),_0x331795=this[_0x1fed80(0x116)](_0x4ea98d)['width'];this[_0x1fed80(0x384)](this[_0x1fed80(0x37b)](_0x50436b));const _0x4179e3=this[_0x1fed80(0x24a)]();if(_0x4179e3===_0x1fed80(0x35a))this[_0x1fed80(0x18c)](_0x4ea98d,_0x5c7565['x']+_0x5c7565[_0x1fed80(0x364)]-_0x331795,_0x5c7565['y'],_0x331795);else{if(_0x4179e3===_0x1fed80(0x388)){const _0x4274d1=_0x5c7565['x']+Math[_0x1fed80(0x21c)]((_0x5c7565[_0x1fed80(0x364)]-_0x331795)/0x2);this[_0x1fed80(0x18c)](_0x4ea98d,_0x4274d1,_0x5c7565['y'],_0x331795);}else this[_0x1fed80(0x18c)](_0x4ea98d,_0x5c7565['x'],_0x5c7565['y'],_0x331795);}},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x1fc)]=function(_0x4abb8f){const _0x32a998=_0x1d9b69;this[_0x32a998(0x254)](_0x4abb8f)[_0x32a998(0x356)](/\\I\[(\d+)\]/i);const _0x17686b=Number(RegExp['$1'])||0x0,_0x527c12=this[_0x32a998(0x1ad)](_0x4abb8f),_0x1c2aac=_0x527c12['x']+Math['floor']((_0x527c12[_0x32a998(0x364)]-ImageManager['iconWidth'])/0x2),_0x28d333=_0x527c12['y']+(_0x527c12['height']-ImageManager[_0x32a998(0x378)])/0x2;this['drawIcon'](_0x17686b,_0x1c2aac,_0x28d333);},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x376)]=function(){const _0x3d4dc8=_0x1d9b69,_0x13b932=SceneManager['_scene'];if(_0x13b932&&_0x13b932[_0x3d4dc8(0x2d7)])return _0x13b932['user']();return null;},Window_EquipCommand['prototype'][_0x1d9b69(0x1cb)]=function(){const _0x2f4cb1=_0x1d9b69;Window_Command[_0x2f4cb1(0x199)][_0x2f4cb1(0x1cb)][_0x2f4cb1(0x422)](this),this['_helpWindow'][_0x2f4cb1(0x42e)](this[_0x2f4cb1(0x1d1)]());},Window_EquipCommand[_0x1d9b69(0x199)][_0x1d9b69(0x1d1)]=function(){const _0x52e86e=_0x1d9b69,_0x217024=this[_0x52e86e(0x276)]();switch(_0x217024){case _0x52e86e(0x2fc):return TextManager[_0x52e86e(0x387)][_0x52e86e(0x20b)][_0x52e86e(0x2fc)];case _0x52e86e(0x13d):return TextManager[_0x52e86e(0x387)]['helpDesc'][_0x52e86e(0x13d)];case _0x52e86e(0x153):return TextManager[_0x52e86e(0x387)][_0x52e86e(0x20b)][_0x52e86e(0x153)];default:return'';}},Window_EquipSlot['prototype'][_0x1d9b69(0x373)]=function(){const _0x5bdda3=_0x1d9b69;return Imported[_0x5bdda3(0x41a)]&&Window_HorzCommand['prototype']['isUseModernControls'][_0x5bdda3(0x422)](this);},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0x42d)]=function(){const _0x5bc872=_0x1d9b69;Window_StatusBase['prototype']['activate'][_0x5bc872(0x422)](this),this['callUpdateHelp']();},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0xb8)]=function(){const _0xdf6b2=_0x1d9b69;Window_StatusBase['prototype'][_0xdf6b2(0xb8)][_0xdf6b2(0x422)](this),this[_0xdf6b2(0x305)]();},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0x305)]=function(){const _0x3e600b=_0x1d9b69;if(!this[_0x3e600b(0x11b)]())return;if(Input[_0x3e600b(0x1c6)]('shift')&&this['item']()){const _0x535cba=SceneManager[_0x3e600b(0x23e)][_0x3e600b(0x136)];_0x535cba&&(this['canShiftRemoveEquipment'](this['index']())?(this[_0x3e600b(0x301)](),this[_0x3e600b(0x1cb)]()):this[_0x3e600b(0x313)]());}},Window_EquipSlot['prototype'][_0x1d9b69(0x43b)]=function(_0x1c7296){const _0x2034bd=_0x1d9b69,_0x751f3=SceneManager[_0x2034bd(0x23e)][_0x2034bd(0x136)];if(!_0x751f3)return;if(!_0x751f3[_0x2034bd(0xcb)](this[_0x2034bd(0x458)]()))return![];const _0x211460=_0x751f3[_0x2034bd(0xd4)]()[this[_0x2034bd(0x458)]()];if(_0x751f3['nonRemovableEtypes']()[_0x2034bd(0x22a)](_0x211460))return![];return!![];;},Window_EquipSlot['prototype'][_0x1d9b69(0x301)]=function(){const _0x4583a4=_0x1d9b69;SoundManager['playEquip']();const _0x38063f=SceneManager[_0x4583a4(0x23e)]['_actor'];_0x38063f['changeEquip'](this[_0x4583a4(0x458)](),null),this[_0x4583a4(0x1ae)](),this[_0x4583a4(0x39f)][_0x4583a4(0x1ae)](),this['callUpdateHelp']();const _0x5c80ea=SceneManager[_0x4583a4(0x23e)][_0x4583a4(0x1e4)];if(_0x5c80ea)_0x5c80ea[_0x4583a4(0x1ae)]();},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0x11b)]=function(){const _0xf2fcf0=_0x1d9b69;if(!this['active'])return![];if(!VisuMZ[_0xf2fcf0(0x222)][_0xf2fcf0(0x351)][_0xf2fcf0(0x190)][_0xf2fcf0(0x230)])return![];return!![];},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0x42b)]=function(){const _0x504a12=_0x1d9b69;!this[_0x504a12(0x29b)]()&&Window_StatusBase[_0x504a12(0x199)]['processCursorMoveModernControls']['call'](this);},Window_EquipSlot['prototype'][_0x1d9b69(0x29b)]=function(){const _0x3554c5=_0x1d9b69;if(!this['isCursorMovable']())return![];if(SceneManager[_0x3554c5(0x23e)][_0x3554c5(0x1b6)]!==Scene_Equip)return![];if(this[_0x3554c5(0x152)]())return this[_0x3554c5(0x1b4)](),Input[_0x3554c5(0x153)](),SceneManager[_0x3554c5(0x23e)][_0x3554c5(0x349)](),![];else{if(Input['isRepeated'](_0x3554c5(0x2eb))){const _0x59a73c=this['index']();return Input[_0x3554c5(0x3b2)]('shift')?this['cursorPagedown']():this['cursorDown'](Input[_0x3554c5(0x1c6)](_0x3554c5(0x2eb))),this[_0x3554c5(0x458)]()!==_0x59a73c&&this['playCursorSound'](),!![];}else{if(this[_0x3554c5(0x331)]()&&Input[_0x3554c5(0x1c6)](_0x3554c5(0x385)))return!![];}}return![];},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0x152)]=function(){const _0x581645=_0x1d9b69;if(this[_0x581645(0x458)]()!==0x0)return![];const _0x1e44bc=VisuMZ[_0x581645(0x222)]['Settings'][_0x581645(0x190)];if(!_0x1e44bc[_0x581645(0x223)]&&!_0x1e44bc[_0x581645(0x438)])return![];return Input[_0x581645(0x1c6)]('up');},Window_EquipSlot['prototype'][_0x1d9b69(0x331)]=function(){const _0x2d6fcf=_0x1d9b69;return VisuMZ[_0x2d6fcf(0x222)]['Settings'][_0x2d6fcf(0x190)][_0x2d6fcf(0x230)];},Window_EquipSlot[_0x1d9b69(0x199)]['processTouchModernControls']=function(){const _0x1651fc=_0x1d9b69;if(this[_0x1651fc(0x12b)]()&&this[_0x1651fc(0x1e6)]&&SceneManager['_scene'][_0x1651fc(0x1b6)]===Scene_Equip){if(this['isHoverEnabled']()&&TouchInput[_0x1651fc(0x27b)]())this['onTouchSelectModernControls'](![]);else TouchInput[_0x1651fc(0x1c6)]()&&this[_0x1651fc(0x23a)](!![]);if(TouchInput['isClicked']())this[_0x1651fc(0x115)]();else TouchInput[_0x1651fc(0x2e5)]()&&this[_0x1651fc(0x453)]();}},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0x23a)]=function(_0x317a43){const _0x417355=_0x1d9b69;this['_doubleTouch']=![];const _0x4640eb=this[_0x417355(0x458)](),_0xe0795c=this[_0x417355(0x192)](),_0x1892f4=SceneManager[_0x417355(0x23e)][_0x417355(0x36f)];if(_0x1892f4['isOpen']()&&_0x1892f4[_0x417355(0x1e6)]){if(_0xe0795c>=0x0)_0xe0795c===this[_0x417355(0x458)]()&&(this[_0x417355(0x2b1)]=!![]),this[_0x417355(0x42d)](),this[_0x417355(0x32f)](_0xe0795c);else _0x1892f4['hitIndex']()>=0x0&&(this[_0x417355(0x3d8)](),this['deselect']());}_0x317a43&&this['index']()!==_0x4640eb&&this[_0x417355(0x1b4)]();},Window_EquipSlot[_0x1d9b69(0x199)][_0x1d9b69(0x174)]=function(){const _0x20d1fa=_0x1d9b69;return this[_0x20d1fa(0x458)]();},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2a4)]=Window_EquipItem['prototype']['includes'],Window_EquipItem[_0x1d9b69(0x199)]['includes']=function(_0x2f50cb){const _0x454e01=_0x1d9b69;if(_0x2f50cb===null&&this['nonRemovableEtypes']()[_0x454e01(0x22a)](this[_0x454e01(0x171)]()))return![];else{$gameTemp['_checkEquipRequirements']=!![];let _0x12238b=VisuMZ[_0x454e01(0x222)][_0x454e01(0x2a4)][_0x454e01(0x422)](this,_0x2f50cb);return $gameTemp[_0x454e01(0x34a)]=undefined,_0x12238b;}},VisuMZ['ItemsEquipsCore']['Window_EquipItem_isEnabled']=Window_EquipItem[_0x1d9b69(0x199)]['isEnabled'],Window_EquipItem[_0x1d9b69(0x199)]['isEnabled']=function(_0x55a062){const _0x2054c6=_0x1d9b69;if(_0x55a062&&this[_0x2054c6(0x136)]){if(this['itemHasEquipLimit'](_0x55a062))return![];if(this[_0x2054c6(0x262)](_0x55a062))return![];if(this[_0x2054c6(0xe9)](_0x55a062))return![];if(!this[_0x2054c6(0x136)]['canEquip'](_0x55a062))return![];}if(!_0x55a062)return!this[_0x2054c6(0xce)]()[_0x2054c6(0x22a)](this[_0x2054c6(0x171)]());return VisuMZ[_0x2054c6(0x222)][_0x2054c6(0x2f5)][_0x2054c6(0x422)](this,_0x55a062);},Window_EquipItem['prototype'][_0x1d9b69(0x19b)]=function(_0x4df93b){const _0x1e4740=_0x1d9b69,_0x1e44ed=_0x4df93b[_0x1e4740(0x3dc)];if(_0x1e44ed['match'](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x49d527=Number(RegExp['$1'])||0x1;let _0x1de8c0=0x0;const _0x31d031=this['_actor'][_0x1e4740(0x146)](),_0x3dedc5=SceneManager[_0x1e4740(0x23e)][_0x1e4740(0x426)][_0x1e4740(0x174)]();_0x31d031[_0x3dedc5]=null;for(const _0x8e0456 of _0x31d031){if(!_0x8e0456)continue;if(DataManager[_0x1e4740(0x33d)](_0x4df93b)===DataManager[_0x1e4740(0x33d)](_0x8e0456)){if(_0x4df93b['id']===_0x8e0456['id'])_0x1de8c0+=0x1;}}return _0x1de8c0>=_0x49d527;}else return![];},Window_EquipItem['prototype'][_0x1d9b69(0x262)]=function(_0x3d7652){const _0x39e97d=_0x1d9b69;if(!DataManager[_0x39e97d(0x33d)](_0x3d7652))return![];const _0x404ced=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x4654d0=0x0;const _0x34bf18=this[_0x39e97d(0x136)][_0x39e97d(0x146)](),_0x3a5ac8=SceneManager['_scene'][_0x39e97d(0x426)][_0x39e97d(0x174)]();_0x34bf18[_0x3a5ac8]=null;for(const _0x177759 of _0x34bf18){if(!_0x177759)continue;if(!DataManager[_0x39e97d(0x33d)](_0x177759))continue;if(_0x3d7652[_0x39e97d(0x15a)]===_0x177759['wtypeId']){_0x4654d0+=0x1;if(_0x3d7652[_0x39e97d(0x3dc)]['match'](_0x404ced)){const _0x2307af=Number(RegExp['$1'])||0x1;if(_0x4654d0>=_0x2307af)return!![];}if(_0x177759['note']['match'](_0x404ced)){const _0x46fc93=Number(RegExp['$1'])||0x1;if(_0x4654d0>=_0x46fc93)return!![];}}}return![];},Window_EquipItem[_0x1d9b69(0x199)][_0x1d9b69(0xe9)]=function(_0x5221ab){const _0x3b7174=_0x1d9b69;if(!DataManager['isArmor'](_0x5221ab))return![];const _0x1bf523=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x1cc48d=0x0;const _0x492d47=this['_actor'][_0x3b7174(0x146)](),_0x22fd50=SceneManager[_0x3b7174(0x23e)][_0x3b7174(0x426)][_0x3b7174(0x174)]();_0x492d47[_0x22fd50]=null;for(const _0x58c665 of _0x492d47){if(!_0x58c665)continue;if(!DataManager[_0x3b7174(0x2d3)](_0x58c665))continue;if(_0x5221ab[_0x3b7174(0x309)]===_0x58c665[_0x3b7174(0x309)]){_0x1cc48d+=0x1;if(_0x5221ab[_0x3b7174(0x3dc)][_0x3b7174(0x356)](_0x1bf523)){const _0xc89677=Number(RegExp['$1'])||0x1;if(_0x1cc48d>=_0xc89677)return!![];}if(_0x58c665[_0x3b7174(0x3dc)][_0x3b7174(0x356)](_0x1bf523)){const _0x461989=Number(RegExp['$1'])||0x1;if(_0x1cc48d>=_0x461989)return!![];}}}return![];},Window_EquipItem[_0x1d9b69(0x199)][_0x1d9b69(0xce)]=function(){const _0x3b350e=_0x1d9b69;return VisuMZ[_0x3b350e(0x222)][_0x3b350e(0x351)][_0x3b350e(0x190)][_0x3b350e(0x1c8)];},Window_EquipItem['prototype'][_0x1d9b69(0x2f1)]=function(_0x9a87ee){const _0x26af8e=_0x1d9b69,_0x1b2d15=this[_0x26af8e(0x210)](_0x9a87ee);_0x1b2d15?Window_ItemList[_0x26af8e(0x199)][_0x26af8e(0x2f1)][_0x26af8e(0x422)](this,_0x9a87ee):this[_0x26af8e(0x162)](_0x9a87ee);},Window_EquipItem[_0x1d9b69(0x199)][_0x1d9b69(0x162)]=function(_0x26aa6d){const _0x2b1da1=_0x1d9b69;this[_0x2b1da1(0x384)](this[_0x2b1da1(0x3b3)](null));const _0x5676db=VisuMZ['ItemsEquipsCore'][_0x2b1da1(0x351)][_0x2b1da1(0x190)],_0x451d51=this[_0x2b1da1(0x1ad)](_0x26aa6d),_0x3f98cf=_0x451d51['y']+(this['lineHeight']()-ImageManager[_0x2b1da1(0x378)])/0x2,_0x226fa6=ImageManager[_0x2b1da1(0x3b6)]+0x4,_0x503b9d=Math['max'](0x0,_0x451d51[_0x2b1da1(0x364)]-_0x226fa6);this[_0x2b1da1(0x3b4)](),this[_0x2b1da1(0x18d)](_0x5676db[_0x2b1da1(0x34f)],_0x451d51['x'],_0x3f98cf),this[_0x2b1da1(0x273)](_0x5676db[_0x2b1da1(0xd9)],_0x451d51['x']+_0x226fa6,_0x451d51['y'],_0x503b9d),this[_0x2b1da1(0x384)](!![]);},Window_EquipItem['prototype'][_0x1d9b69(0x1cb)]=function(){const _0x1074e8=_0x1d9b69;Window_ItemList[_0x1074e8(0x199)][_0x1074e8(0x1cb)][_0x1074e8(0x422)](this);if(this[_0x1074e8(0x136)]&&this['_statusWindow']&&this[_0x1074e8(0x361)]>=0x0){const _0x2fb3da=JsonEx[_0x1074e8(0x31b)](this['_actor']);_0x2fb3da['_tempActor']=!![],_0x2fb3da[_0x1074e8(0x142)](this[_0x1074e8(0x361)],this[_0x1074e8(0x158)]()),this[_0x1074e8(0x1e4)][_0x1074e8(0x1d0)](_0x2fb3da);}},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x22f)]=Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2bf)],Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2bf)]=function(_0x5cfc90){const _0x33f4aa=_0x1d9b69;VisuMZ[_0x33f4aa(0x222)][_0x33f4aa(0x22f)][_0x33f4aa(0x422)](this,_0x5cfc90),this[_0x33f4aa(0x11d)](_0x5cfc90);},Window_ShopCommand['prototype'][_0x1d9b69(0x11d)]=function(_0x3f7b03){const _0x5b7d63=_0x1d9b69,_0x398151=new Rectangle(0x0,0x0,_0x3f7b03[_0x5b7d63(0x364)],_0x3f7b03[_0x5b7d63(0x217)]);this[_0x5b7d63(0x381)]=new Window_Base(_0x398151),this[_0x5b7d63(0x381)][_0x5b7d63(0x293)]=0x0,this['addChild'](this[_0x5b7d63(0x381)]),this['updateCommandNameWindow']();},Window_ShopCommand[_0x1d9b69(0x199)]['callUpdateHelp']=function(){const _0x3a5f56=_0x1d9b69;Window_HorzCommand['prototype'][_0x3a5f56(0x3f7)][_0x3a5f56(0x422)](this);if(this[_0x3a5f56(0x381)])this[_0x3a5f56(0xbe)]();},Window_ShopCommand[_0x1d9b69(0x199)]['updateCommandNameWindow']=function(){const _0x335110=_0x1d9b69,_0x2e5864=this[_0x335110(0x381)];_0x2e5864[_0x335110(0x337)]['clear']();const _0x27d238=this[_0x335110(0xda)](this[_0x335110(0x458)]());if(_0x27d238===_0x335110(0xbd)){const _0x28045=this[_0x335110(0x1ad)](this[_0x335110(0x458)]());let _0x319cc0=this['commandName'](this[_0x335110(0x458)]());_0x319cc0=_0x319cc0[_0x335110(0x2a3)](/\\I\[(\d+)\]/gi,''),_0x2e5864[_0x335110(0x1c3)](),this[_0x335110(0x31d)](_0x319cc0,_0x28045),this['commandNameWindowDrawText'](_0x319cc0,_0x28045),this[_0x335110(0x12e)](_0x319cc0,_0x28045);}},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x31d)]=function(_0x4fa6b4,_0x54eaff){},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2b8)]=function(_0x8a638f,_0x525f95){const _0x5e4316=_0x1d9b69,_0x5aadcb=this[_0x5e4316(0x381)];_0x5aadcb[_0x5e4316(0x273)](_0x8a638f,0x0,_0x525f95['y'],_0x5aadcb[_0x5e4316(0x2e6)],_0x5e4316(0x388));},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x12e)]=function(_0x59a369,_0x2221c4){const _0x3b2c4b=_0x1d9b69,_0x497221=this['_commandNameWindow'],_0x3a54ee=$gameSystem[_0x3b2c4b(0x22c)](),_0x50232c=_0x2221c4['x']+Math[_0x3b2c4b(0x21c)](_0x2221c4[_0x3b2c4b(0x364)]/0x2)+_0x3a54ee;_0x497221['x']=_0x497221['width']/-0x2+_0x50232c,_0x497221['y']=Math[_0x3b2c4b(0x21c)](_0x2221c4[_0x3b2c4b(0x217)]/0x2);},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x29c)]=function(){const _0x2fdd69=_0x1d9b69;return this[_0x2fdd69(0x304)]?this[_0x2fdd69(0x304)][_0x2fdd69(0x440)]:0x3;},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x1a8)]=function(){const _0x8d1d2a=_0x1d9b69;return VisuMZ[_0x8d1d2a(0x222)]['Settings']['ShopScene'][_0x8d1d2a(0xde)];},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x12a)]=function(){const _0x49b5bc=_0x1d9b69;this[_0x49b5bc(0x3e3)](),this[_0x49b5bc(0x297)](),this[_0x49b5bc(0x2a6)]();},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x1ae)]=function(){const _0x5b7a31=_0x1d9b69;Window_HorzCommand[_0x5b7a31(0x199)]['refresh'][_0x5b7a31(0x422)](this),this[_0x5b7a31(0x45d)]();},Window_ShopCommand[_0x1d9b69(0x199)]['addBuyCommand']=function(){const _0x4a8972=_0x1d9b69,_0x511cbb=this[_0x4a8972(0x372)](),_0x10980a=VisuMZ[_0x4a8972(0x222)][_0x4a8972(0x351)]['ShopScene'][_0x4a8972(0x3ba)],_0x555459=_0x511cbb===_0x4a8972(0x29a)?TextManager[_0x4a8972(0x320)]:_0x4a8972(0x355)['format'](_0x10980a,TextManager['buy']),_0x4011dc=this[_0x4a8972(0x143)]();if(this['hideDisabledCommands']()&&!_0x4011dc)return;this[_0x4a8972(0x25f)](_0x555459,'buy',_0x4011dc);},Window_ShopCommand['prototype']['isBuyCommandEnabled']=function(){const _0x5e224d=_0x1d9b69;return SceneManager[_0x5e224d(0x23e)][_0x5e224d(0x1b6)]===Scene_Shop?SceneManager[_0x5e224d(0x23e)]['_goodsCount']>0x0:!![];},Window_ShopCommand[_0x1d9b69(0x199)]['addSellCommand']=function(){const _0x21cd59=_0x1d9b69,_0x3e8bc4=this[_0x21cd59(0x372)](),_0x565748=VisuMZ[_0x21cd59(0x222)][_0x21cd59(0x351)][_0x21cd59(0x191)][_0x21cd59(0x137)],_0x472993=_0x3e8bc4===_0x21cd59(0x29a)?TextManager[_0x21cd59(0xe0)]:_0x21cd59(0x355)[_0x21cd59(0x13e)](_0x565748,TextManager[_0x21cd59(0xe0)]),_0x3ab041=this['isSellCommandEnabled']();if(this['hideDisabledCommands']()&&!_0x3ab041)return;this[_0x21cd59(0x25f)](_0x472993,_0x21cd59(0xe0),_0x3ab041);},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x11f)]=function(){const _0x3870e2=_0x1d9b69;return!this[_0x3870e2(0x164)];},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2a6)]=function(){const _0x22a055=_0x1d9b69,_0x16907a=this[_0x22a055(0x372)](),_0x2ae882=VisuMZ['ItemsEquipsCore'][_0x22a055(0x351)][_0x22a055(0x191)]['CmdIconCancel'],_0x39aabc=VisuMZ[_0x22a055(0x222)][_0x22a055(0x351)][_0x22a055(0x191)][_0x22a055(0x40d)],_0x4d3d8f=_0x16907a==='text'?_0x39aabc:'\x5cI[%1]%2'[_0x22a055(0x13e)](_0x2ae882,_0x39aabc);this[_0x22a055(0x25f)](_0x4d3d8f,_0x22a055(0x1a0));},Window_ShopCommand[_0x1d9b69(0x199)]['itemTextAlign']=function(){const _0x1cb6ec=_0x1d9b69;return VisuMZ[_0x1cb6ec(0x222)][_0x1cb6ec(0x351)][_0x1cb6ec(0x191)]['CmdTextAlign'];},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x2f1)]=function(_0x1f12a4){const _0x3b59d8=_0x1d9b69,_0x202bab=this[_0x3b59d8(0xda)](_0x1f12a4);if(_0x202bab===_0x3b59d8(0x3b9))this[_0x3b59d8(0x3dd)](_0x1f12a4);else _0x202bab==='icon'?this[_0x3b59d8(0x1fc)](_0x1f12a4):Window_HorzCommand['prototype']['drawItem']['call'](this,_0x1f12a4);},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x372)]=function(){const _0x1e3259=_0x1d9b69;return VisuMZ[_0x1e3259(0x222)]['Settings'][_0x1e3259(0x191)][_0x1e3259(0x2c3)];},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0xda)]=function(_0x58fe7e){const _0x2c6174=_0x1d9b69;if(_0x58fe7e<0x0)return _0x2c6174(0x29a);const _0x20dd40=this[_0x2c6174(0x372)]();if(_0x20dd40!==_0x2c6174(0x241))return _0x20dd40;else{if(this['maxItems']()>0x0){const _0x50b94d=this[_0x2c6174(0x254)](_0x58fe7e);if(_0x50b94d[_0x2c6174(0x356)](/\\I\[(\d+)\]/i)){const _0x461f41=this[_0x2c6174(0x1ad)](_0x58fe7e),_0x5c8879=this['textSizeEx'](_0x50b94d)[_0x2c6174(0x364)];return _0x5c8879<=_0x461f41['width']?_0x2c6174(0x3b9):_0x2c6174(0xbd);}}}return'text';},Window_ShopCommand['prototype'][_0x1d9b69(0x3dd)]=function(_0x183b4d){const _0x347a1e=_0x1d9b69,_0x32f5f4=this[_0x347a1e(0x1ad)](_0x183b4d),_0xdc72c1=this['commandName'](_0x183b4d),_0x2219fc=this[_0x347a1e(0x116)](_0xdc72c1)[_0x347a1e(0x364)];this[_0x347a1e(0x384)](this[_0x347a1e(0x37b)](_0x183b4d));const _0x5b7413=this['itemTextAlign']();if(_0x5b7413===_0x347a1e(0x35a))this['drawTextEx'](_0xdc72c1,_0x32f5f4['x']+_0x32f5f4[_0x347a1e(0x364)]-_0x2219fc,_0x32f5f4['y'],_0x2219fc);else{if(_0x5b7413===_0x347a1e(0x388)){const _0x54fd6d=_0x32f5f4['x']+Math[_0x347a1e(0x21c)]((_0x32f5f4[_0x347a1e(0x364)]-_0x2219fc)/0x2);this[_0x347a1e(0x18c)](_0xdc72c1,_0x54fd6d,_0x32f5f4['y'],_0x2219fc);}else this[_0x347a1e(0x18c)](_0xdc72c1,_0x32f5f4['x'],_0x32f5f4['y'],_0x2219fc);}},Window_ShopCommand[_0x1d9b69(0x199)][_0x1d9b69(0x1fc)]=function(_0x468d01){const _0x597afb=_0x1d9b69;this['commandName'](_0x468d01)[_0x597afb(0x356)](/\\I\[(\d+)\]/i);const _0x22e570=Number(RegExp['$1'])||0x0,_0x172c0d=this['itemLineRect'](_0x468d01),_0x4c1694=_0x172c0d['x']+Math['floor']((_0x172c0d[_0x597afb(0x364)]-ImageManager[_0x597afb(0x3b6)])/0x2),_0x36a6e7=_0x172c0d['y']+(_0x172c0d['height']-ImageManager['iconHeight'])/0x2;this[_0x597afb(0x18d)](_0x22e570,_0x4c1694,_0x36a6e7);},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x2b4)]=Window_ShopBuy['prototype'][_0x1d9b69(0x1ae)],Window_ShopBuy[_0x1d9b69(0x199)]['refresh']=function(){const _0x41f97f=_0x1d9b69;this['updateMoneyAmount'](),VisuMZ[_0x41f97f(0x222)][_0x41f97f(0x2b4)][_0x41f97f(0x422)](this);},Window_ShopBuy[_0x1d9b69(0x199)][_0x1d9b69(0x1ef)]=function(){const _0x597060=_0x1d9b69;SceneManager[_0x597060(0x23e)][_0x597060(0x1b6)]===Scene_Shop&&(this[_0x597060(0x168)]=SceneManager[_0x597060(0x23e)][_0x597060(0x45b)]());},VisuMZ['ItemsEquipsCore'][_0x1d9b69(0xdb)]=Window_ShopBuy[_0x1d9b69(0x199)][_0x1d9b69(0xd0)],Window_ShopBuy[_0x1d9b69(0x199)][_0x1d9b69(0xd0)]=function(_0x4235e8){const _0x15872f=_0x1d9b69;if(!_0x4235e8)return 0x0;let _0x2d4e64=VisuMZ[_0x15872f(0x222)][_0x15872f(0xdb)][_0x15872f(0x422)](this,_0x4235e8);return Math[_0x15872f(0xef)](0x0,this[_0x15872f(0xd2)](_0x4235e8,_0x2d4e64));},Window_ShopBuy[_0x1d9b69(0x199)][_0x1d9b69(0xd2)]=function(_0x4cac5c,_0x509c50){const _0x1f983f=_0x1d9b69,_0x18c535=_0x4cac5c[_0x1f983f(0x3dc)];if(_0x18c535[_0x1f983f(0x356)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x402552=String(RegExp['$1']);try{eval(_0x402552);}catch(_0x3ef260){if($gameTemp[_0x1f983f(0x446)]())console[_0x1f983f(0x1bb)](_0x3ef260);}}_0x509c50=VisuMZ['ItemsEquipsCore'][_0x1f983f(0x351)][_0x1f983f(0x191)][_0x1f983f(0x125)][_0x1f983f(0x422)](this,_0x4cac5c,_0x509c50);if(isNaN(_0x509c50))_0x509c50=0x0;return Math[_0x1f983f(0x21c)](_0x509c50);},Window_ShopBuy[_0x1d9b69(0x199)]['drawItem']=function(_0x3f5b5c){const _0x77a4cb=_0x1d9b69;this[_0x77a4cb(0x1c3)]();const _0x555933=this['itemAt'](_0x3f5b5c),_0x454dd2=this['itemLineRect'](_0x3f5b5c),_0x132eee=_0x454dd2['width'];this[_0x77a4cb(0x384)](this[_0x77a4cb(0x3b3)](_0x555933)),this[_0x77a4cb(0x30e)](_0x555933,_0x454dd2['x'],_0x454dd2['y'],_0x132eee),this['drawItemCost'](_0x555933,_0x454dd2),this['changePaintOpacity'](!![]);},Window_ShopBuy[_0x1d9b69(0x199)]['drawItemCost']=function(_0x99a5d4,_0x4341c1){const _0x5a4195=_0x1d9b69,_0x47bd3b=this[_0x5a4195(0xd0)](_0x99a5d4);this[_0x5a4195(0x250)](_0x47bd3b,TextManager[_0x5a4195(0x1bc)],_0x4341c1['x'],_0x4341c1['y'],_0x4341c1[_0x5a4195(0x364)]);},Window_ShopSell['prototype'][_0x1d9b69(0x29c)]=function(){const _0x36e313=_0x1d9b69;return SceneManager[_0x36e313(0x23e)][_0x36e313(0x434)]()?0x1:0x2;},VisuMZ[_0x1d9b69(0x222)][_0x1d9b69(0x3bb)]=Window_ShopSell[_0x1d9b69(0x199)]['isEnabled'],Window_ShopSell[_0x1d9b69(0x199)][_0x1d9b69(0x3b3)]=function(_0x261e31){const _0x1c6637=_0x1d9b69;if(!_0x261e31)return![];const _0x4f661b=_0x261e31[_0x1c6637(0x3dc)];if(_0x4f661b[_0x1c6637(0x356)](/<CANNOT SELL>/i))return![];if(_0x4f661b[_0x1c6637(0x356)](/<CAN SELL>/i))return!![];if(_0x4f661b[_0x1c6637(0x356)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1111d7=JSON[_0x1c6637(0x443)]('['+RegExp['$1'][_0x1c6637(0x356)](/\d+/g)+']');for(const _0x14e615 of _0x1111d7){if(!$gameSwitches[_0x1c6637(0x1de)](_0x14e615))return![];}}if(_0x4f661b[_0x1c6637(0x356)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x20a904=JSON[_0x1c6637(0x443)]('['+RegExp['$1'][_0x1c6637(0x356)](/\d+/g)+']');for(const _0x335c17 of _0x20a904){if(!$gameSwitches['value'](_0x335c17))return![];}}if(_0x4f661b[_0x1c6637(0x356)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x46865b=JSON[_0x1c6637(0x443)]('['+RegExp['$1'][_0x1c6637(0x356)](/\d+/g)+']');for(const _0x51f141 of _0x46865b){if($gameSwitches[_0x1c6637(0x1de)](_0x51f141))return![];}}return VisuMZ[_0x1c6637(0x222)][_0x1c6637(0x3bb)]['call'](this,_0x261e31);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x311)]=function(){return![];},Window_ShopStatus[_0x1d9b69(0x199)]['loadFaceImages']=function(){const _0x9f618c=_0x1d9b69;Window_StatusBase['prototype'][_0x9f618c(0x2c4)][_0x9f618c(0x422)](this);for(const _0x2838fb of $gameParty[_0x9f618c(0x182)]()){ImageManager[_0x9f618c(0x1dd)](_0x2838fb['characterName']());}},Window_ShopStatus[_0x1d9b69(0x199)]['translucentOpacity']=function(){const _0x5a59bd=_0x1d9b69;return VisuMZ[_0x5a59bd(0x222)][_0x5a59bd(0x351)][_0x5a59bd(0x30f)]['Translucent'];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1ae)]=function(){const _0x883bf1=_0x1d9b69;this['contents'][_0x883bf1(0x153)](),this[_0x883bf1(0x34c)][_0x883bf1(0x153)](),this[_0x883bf1(0x28e)]&&(this['resetFontSettings'](),this[_0x883bf1(0x384)](!![]),this[_0x883bf1(0x255)](),this[_0x883bf1(0x25b)]()?this[_0x883bf1(0x1d6)]():this[_0x883bf1(0x1aa)](),this[_0x883bf1(0x291)]());},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x114)]=function(_0x326c5f,_0x54d9d9){const _0x5e6f13=_0x1d9b69;if(!this[_0x5e6f13(0x25b)]()&&!DataManager['isItem'](this[_0x5e6f13(0x28e)]))return;const _0x214138=this['innerWidth']-this[_0x5e6f13(0xba)]()-_0x326c5f,_0x2deae9=this[_0x5e6f13(0x186)](_0x5e6f13(0x18a));this[_0x5e6f13(0x120)](ColorManager[_0x5e6f13(0x3fa)]()),this[_0x5e6f13(0x273)](TextManager[_0x5e6f13(0x2db)],_0x326c5f+this['itemPadding'](),_0x54d9d9,_0x214138-_0x2deae9),this[_0x5e6f13(0x3b4)](),this[_0x5e6f13(0x17d)](this['_item'],_0x326c5f,_0x54d9d9,_0x214138);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3d2)]=function(_0x26a252,_0x22d544,_0x32f320,_0x46c60a,_0x294c7c){const _0x3d10c0=_0x1d9b69;if(VisuMZ['ItemsEquipsCore'][_0x3d10c0(0x351)][_0x3d10c0(0x30f)][_0x3d10c0(0x15d)]===![])return;_0x294c7c=Math[_0x3d10c0(0xef)](_0x294c7c||0x1,0x1);while(_0x294c7c--){_0x46c60a=_0x46c60a||this['lineHeight'](),this[_0x3d10c0(0x34c)]['paintOpacity']=0xa0;const _0x54b81c=ColorManager[_0x3d10c0(0x101)]();this[_0x3d10c0(0x34c)][_0x3d10c0(0x3e8)](_0x26a252+0x1,_0x22d544+0x1,_0x32f320-0x2,_0x46c60a-0x2,_0x54b81c),this[_0x3d10c0(0x34c)]['paintOpacity']=0xff;}},ColorManager[_0x1d9b69(0x101)]=function(){const _0x5648c0=_0x1d9b69,_0x3577c7=VisuMZ[_0x5648c0(0x222)]['Settings'][_0x5648c0(0x30f)];let _0x3f8982=_0x3577c7[_0x5648c0(0x281)]!==undefined?_0x3577c7[_0x5648c0(0x281)]:0x13;return ColorManager[_0x5648c0(0x3f4)](_0x3f8982);},Window_ShopStatus[_0x1d9b69(0x199)]['drawEquipData']=function(){const _0x5706e3=_0x1d9b69;if(VisuMZ[_0x5706e3(0x222)][_0x5706e3(0x351)]['StatusWindow']['DrawEquipData']){VisuMZ[_0x5706e3(0x222)]['Settings']['StatusWindow'][_0x5706e3(0x253)][_0x5706e3(0x422)](this);return;}const _0x3c1d7f=this['lineHeight'](),_0x920f9e=this['gaugeLineHeight']()+0x8;let _0x417f07=0x0,_0x43ccff=0x0,_0x2317cb=this['innerWidth'],_0x308b07=this[_0x5706e3(0x207)],_0x1b5397=Math[_0x5706e3(0x21c)](_0x2317cb/0x2),_0x36288c=_0x417f07+_0x2317cb-_0x1b5397;this[_0x5706e3(0x30e)](this[_0x5706e3(0x28e)],_0x417f07+this[_0x5706e3(0xba)](),_0x43ccff,_0x2317cb-this[_0x5706e3(0xba)]()*0x2),this[_0x5706e3(0x3d2)](_0x417f07,_0x43ccff,_0x2317cb),_0x43ccff+=_0x3c1d7f;if(this[_0x5706e3(0x2a5)](_0x417f07,_0x43ccff,_0x1b5397))_0x43ccff+=0x0;if(this[_0x5706e3(0x130)](_0x36288c,_0x43ccff,_0x1b5397))_0x43ccff+=_0x3c1d7f;const _0x929b94=this[_0x5706e3(0x3a8)](),_0x33a6ba=_0x43ccff;_0x43ccff=_0x308b07-_0x929b94[_0x5706e3(0x440)]*_0x920f9e-0x4;let _0x296a23=_0x417f07,_0x26f9c0=0x0,_0x424180=_0x43ccff;for(const _0x22c078 of _0x929b94){_0x26f9c0=Math[_0x5706e3(0xef)](this['drawParamName'](_0x22c078,_0x417f07+0x4,_0x43ccff+0x4,_0x2317cb),_0x26f9c0),_0x43ccff+=_0x920f9e;}const _0x1fa715=$gameParty['maxBattleMembers'](),_0x5e6510=Math[_0x5706e3(0x21c)]((_0x2317cb-_0x26f9c0)/_0x1fa715);_0x26f9c0=_0x2317cb-_0x5e6510*_0x1fa715;for(const _0x27c0b8 of $gameParty[_0x5706e3(0x257)]()){const _0x5c1477=$gameParty[_0x5706e3(0x257)]()['indexOf'](_0x27c0b8),_0x271910=_0x296a23+_0x26f9c0+_0x5c1477*_0x5e6510;this[_0x5706e3(0x384)](_0x27c0b8['canEquip'](this['_item'])),this[_0x5706e3(0x3b1)](_0x27c0b8,_0x271910+_0x5e6510/0x2,_0x424180);let _0x25576a=_0x424180;for(const _0x758b3a of _0x929b94){const _0x29cc55=_0x25576a-(_0x3c1d7f-_0x920f9e)/0x2;this[_0x5706e3(0x181)](_0x27c0b8,_0x758b3a,_0x271910,_0x29cc55,_0x5e6510),_0x25576a+=_0x920f9e;}}this[_0x5706e3(0x3d2)](_0x296a23,_0x33a6ba,_0x26f9c0,_0x424180-_0x33a6ba);for(let _0x346c4a=0x0;_0x346c4a<_0x1fa715;_0x346c4a++){const _0x50a541=_0x296a23+_0x26f9c0+_0x346c4a*_0x5e6510;this[_0x5706e3(0x3d2)](_0x50a541,_0x33a6ba,_0x5e6510,_0x424180-_0x33a6ba);}for(const _0x145f7b of _0x929b94){this[_0x5706e3(0x3d2)](_0x296a23,_0x424180,_0x26f9c0,_0x920f9e);for(let _0x22e4ff=0x0;_0x22e4ff<_0x1fa715;_0x22e4ff++){const _0x447bd1=_0x296a23+_0x26f9c0+_0x22e4ff*_0x5e6510;this[_0x5706e3(0x3d2)](_0x447bd1,_0x424180,_0x5e6510,_0x920f9e);}_0x424180+=_0x920f9e;}},Window_ShopStatus[_0x1d9b69(0x199)]['drawItemEquipType']=function(_0x4f82bb,_0x11f295,_0x5c433e){const _0x4342ef=_0x1d9b69;if(!this[_0x4342ef(0x25b)]())return![];const _0x29580f=$dataSystem[_0x4342ef(0x455)][this[_0x4342ef(0x28e)][_0x4342ef(0x171)]];return this[_0x4342ef(0x3da)](_0x29580f,_0x4f82bb,_0x11f295,_0x5c433e,!![]),this['drawItemDarkRect'](_0x4f82bb,_0x11f295,_0x5c433e),this[_0x4342ef(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemQuantityText']=function(){const _0x5a4e63=_0x1d9b69,_0x5c57e9=VisuMZ[_0x5a4e63(0x222)][_0x5a4e63(0x351)]['ItemScene'][_0x5a4e63(0x3e2)];return _0x5c57e9[_0x5a4e63(0x13e)]($gameParty['numItems'](this[_0x5a4e63(0x28e)]));},Window_ShopStatus[_0x1d9b69(0x199)]['actorParams']=function(){const _0x4c36f4=_0x1d9b69;let _0x2583d5=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];return Imported[_0x4c36f4(0x41a)]&&(_0x2583d5=VisuMZ[_0x4c36f4(0x1ab)]['Settings'][_0x4c36f4(0x1e2)][_0x4c36f4(0x3e1)]),_0x2583d5=_0x2583d5[_0x4c36f4(0x419)](_0x10b2e3=>typeof _0x10b2e3===_0x4c36f4(0x437)?_0x10b2e3:_0x10b2e3[_0x4c36f4(0x20d)]()['trim']()),_0x2583d5;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x33e)]=function(){const _0x37c41d=_0x1d9b69;return VisuMZ[_0x37c41d(0x222)][_0x37c41d(0x351)][_0x37c41d(0x30f)][_0x37c41d(0x1a6)];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x23b)]=function(_0x50f674,_0x20d06d,_0xbc3a3e,_0x440fbc){const _0x4fbe43=_0x1d9b69;this[_0x4fbe43(0x1c3)](),this['contents']['fontSize']=this[_0x4fbe43(0x33e)]();let _0x4156bf=this[_0x4fbe43(0x186)](TextManager[_0x4fbe43(0x154)](_0x50f674))+0x4+_0x20d06d;return Imported[_0x4fbe43(0x41a)]?(this[_0x4fbe43(0x3b7)](_0x20d06d,_0xbc3a3e,_0x440fbc,_0x50f674,!![]),VisuMZ[_0x4fbe43(0x1ab)][_0x4fbe43(0x351)][_0x4fbe43(0x1e2)]['DrawIcons']&&(_0x4156bf+=ImageManager[_0x4fbe43(0x3b6)]+0x4)):(this['changeTextColor'](ColorManager[_0x4fbe43(0x3fa)]()),this['drawText'](TextManager[_0x4fbe43(0x154)](_0x50f674),_0x20d06d,_0xbc3a3e,_0x440fbc)),this[_0x4fbe43(0x1c3)](),_0x4156bf;},Window_ShopStatus['prototype']['drawActorParamDifference']=function(_0x4db442,_0xdf7643,_0x1ee50e,_0x3ac84e,_0x4d22a6){const _0x383b7e=_0x1d9b69;_0x1ee50e+=this[_0x383b7e(0xba)](),_0x4d22a6-=this[_0x383b7e(0xba)]()*0x2;const _0x461c3f=VisuMZ[_0x383b7e(0x222)][_0x383b7e(0x351)]['StatusWindow'];this[_0x383b7e(0x337)]['fontSize']=_0x461c3f['ParamChangeFontSize'],this['changePaintOpacity'](_0x4db442['canEquip'](this[_0x383b7e(0x28e)]));if(_0x4db442['isEquipped'](this[_0x383b7e(0x28e)])&&!_0x4db442['anyEmptyEquipSlotsOfSameEtype'](this[_0x383b7e(0x28e)])){const _0x1074db=_0x461c3f['AlreadyEquipMarker'];this['drawText'](_0x1074db,_0x1ee50e,_0x3ac84e,_0x4d22a6,'center');}else{if(_0x4db442[_0x383b7e(0x44e)](this['_item'])){const _0x3caaf2=JsonEx[_0x383b7e(0x31b)](_0x4db442);_0x3caaf2[_0x383b7e(0x3ff)]=!![];const _0x14e540=_0x3caaf2[_0x383b7e(0xd8)](this[_0x383b7e(0x28e)]);_0x14e540>=0x0&&_0x3caaf2[_0x383b7e(0x142)](_0x14e540,this['_item']);let _0x594360=0x0,_0x3c7f01=0x0,_0x3bf008=0x0;Imported[_0x383b7e(0x41a)]?(_0x594360=_0x3caaf2['paramValueByName'](_0xdf7643),_0x3c7f01=_0x594360-_0x4db442[_0x383b7e(0x109)](_0xdf7643),this[_0x383b7e(0x120)](ColorManager[_0x383b7e(0x22d)](_0x3c7f01)),_0x3bf008=(_0x3c7f01>=0x0?'+':'')+VisuMZ[_0x383b7e(0x44d)](_0x3c7f01,0x0,_0xdf7643)):(_0x594360=_0x3caaf2[_0x383b7e(0x154)](_0xdf7643),_0x3c7f01=_0x594360-_0x4db442[_0x383b7e(0x154)](_0xdf7643),this[_0x383b7e(0x120)](ColorManager[_0x383b7e(0x22d)](_0x3c7f01)),_0x3bf008=(_0x3c7f01>=0x0?'+':'')+_0x3c7f01),_0x3bf008==='+0'&&(_0x3bf008=_0x461c3f[_0x383b7e(0xfc)]),this['drawText'](_0x3bf008,_0x1ee50e,_0x3ac84e,_0x4d22a6,'center');}else{const _0x56677a=_0x461c3f[_0x383b7e(0x161)];this[_0x383b7e(0x273)](_0x56677a,_0x1ee50e,_0x3ac84e,_0x4d22a6,_0x383b7e(0x388));}}this[_0x383b7e(0x1c3)](),this[_0x383b7e(0x384)](!![]);},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0x427)]=function(_0x17fd51){const _0x154efa=_0x1d9b69;if(!_0x17fd51)return![];const _0x133e85=_0x17fd51[_0x154efa(0x171)],_0x2c2d6a=this[_0x154efa(0xd4)]();for(let _0x214f94=0x0;_0x214f94<_0x2c2d6a[_0x154efa(0x440)];_0x214f94++){const _0x24091b=_0x2c2d6a[_0x214f94];if(_0x24091b!==_0x133e85)continue;if(!this[_0x154efa(0x146)]()[_0x214f94])return!![];}return![];},Game_Actor[_0x1d9b69(0x199)][_0x1d9b69(0xd8)]=function(_0x2563bc){const _0x73e07=_0x1d9b69;if(!_0x2563bc)return-0x1;const _0x24def4=_0x2563bc[_0x73e07(0x171)],_0x1b56a5=this[_0x73e07(0xd4)]();let _0x1ea5e3=-0x1;for(let _0x2661f0=0x0;_0x2661f0<_0x1b56a5[_0x73e07(0x440)];_0x2661f0++){const _0x25544d=_0x1b56a5[_0x2661f0];if(_0x25544d!==_0x24def4)continue;if(!this[_0x73e07(0x146)]()[_0x2661f0])return _0x2661f0;if(_0x1ea5e3<0x0)_0x1ea5e3=_0x2661f0;}return _0x1ea5e3;},Window_ShopStatus[_0x1d9b69(0x199)]['drawItemData']=function(){const _0x3ceb5c=_0x1d9b69;VisuMZ[_0x3ceb5c(0x222)][_0x3ceb5c(0x351)][_0x3ceb5c(0x30f)][_0x3ceb5c(0x2e8)][_0x3ceb5c(0x422)](this);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x30e)]=function(_0x3d3596,_0x22b096,_0x5f4a95,_0x3abcf7){const _0x2616c6=_0x1d9b69,_0x1c086b=DataManager['isSkill'](_0x3d3596,_0x22b096,_0x5f4a95,_0x3abcf7)&&Imported[_0x2616c6(0x411)],_0x83fa09=_0x3d3596?_0x3d3596[_0x2616c6(0x218)]:'';if(_0x1c086b)Window_SkillList[_0x2616c6(0x199)][_0x2616c6(0x1cc)]['call'](this,_0x3d3596);Window_Base[_0x2616c6(0x199)][_0x2616c6(0x30e)][_0x2616c6(0x422)](this,_0x3d3596,_0x22b096,_0x5f4a95,_0x3abcf7);if(_0x1c086b)_0x3d3596[_0x2616c6(0x218)]=_0x83fa09;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x255)]=function(){const _0x3c4b8c=_0x1d9b69;this[_0x3c4b8c(0x43c)]={};if(!this[_0x3c4b8c(0x28e)])return;const _0x41d7fb=this[_0x3c4b8c(0x28e)][_0x3c4b8c(0x3dc)];if(_0x41d7fb[_0x3c4b8c(0x356)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x2cb9b2=String(RegExp['$1'])[_0x3c4b8c(0x26c)](/[\r\n]+/);for(const _0x15a6c3 of _0x2cb9b2){if(_0x15a6c3[_0x3c4b8c(0x356)](/(.*):[ ](.*)/i)){const _0x1434c9=String(RegExp['$1'])[_0x3c4b8c(0x20d)]()[_0x3c4b8c(0x3a0)](),_0x6ba7ed=String(RegExp['$2'])[_0x3c4b8c(0x3a0)]();this['_customItemInfo'][_0x1434c9]=_0x6ba7ed;}}}},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1d3)]=function(){const _0x3ea63a=_0x1d9b69;return Math[_0x3ea63a(0xef)](0x1,$gameSystem[_0x3ea63a(0x3c1)]()-0x4);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1c3)]=function(){const _0x1af03e=_0x1d9b69;Window_StatusBase[_0x1af03e(0x199)][_0x1af03e(0x1c3)]['call'](this),this[_0x1af03e(0x337)][_0x1af03e(0x363)]=this['_resetFontSize']||this[_0x1af03e(0x337)][_0x1af03e(0x363)],this[_0x1af03e(0x337)][_0x1af03e(0xfd)]=this[_0x1af03e(0x19e)]||this[_0x1af03e(0x337)]['textColor'];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x43f)]=function(){const _0x8d2d41=_0x1d9b69;return this[_0x8d2d41(0x337)]['fontSize']/$gameSystem[_0x8d2d41(0x3c1)]();},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x18d)]=function(_0x187b68,_0x1922c8,_0x6ed580){const _0x51f48d=_0x1d9b69,_0x29e09d=ImageManager[_0x51f48d(0x397)](_0x51f48d(0x1c2)),_0x690800=ImageManager[_0x51f48d(0x3b6)],_0x2b6ddd=ImageManager['iconHeight'],_0x1916cc=_0x187b68%0x10*_0x690800,_0x484f7d=Math[_0x51f48d(0x21c)](_0x187b68/0x10)*_0x2b6ddd,_0x53d3b4=Math[_0x51f48d(0x247)](_0x690800*this[_0x51f48d(0x43f)]()),_0x4c2fcd=Math[_0x51f48d(0x247)](_0x2b6ddd*this['fontSizeRatio']());this[_0x51f48d(0x337)]['blt'](_0x29e09d,_0x1916cc,_0x484f7d,_0x690800,_0x2b6ddd,_0x1922c8,_0x6ed580,_0x53d3b4,_0x4c2fcd);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1f7)]=function(_0x1138d2,_0x3918cd){const _0x43268c=_0x1d9b69;_0x3918cd[_0x43268c(0x16f)]&&this[_0x43268c(0x18d)](_0x1138d2,_0x3918cd['x'],_0x3918cd['y']+0x2);_0x3918cd['x']+=Math['ceil'](ImageManager[_0x43268c(0x3b6)]*this[_0x43268c(0x43f)]());if(this['fontSizeRatio']()===0x1)_0x3918cd['x']+=0x4;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3da)]=function(_0x37c208,_0x3477b0,_0x1b9aa9,_0x1db415,_0x5d779a,_0xae2abf){const _0x2e2554=_0x1d9b69;_0x37c208=_0x37c208||'',_0xae2abf=_0xae2abf||_0x2e2554(0x386),this[_0x2e2554(0x1c0)]=this[_0x2e2554(0x1d3)](),this['_resetFontColor']=_0x5d779a?ColorManager[_0x2e2554(0x3fa)]():this[_0x2e2554(0x337)][_0x2e2554(0xfd)],_0x3477b0+=this[_0x2e2554(0xba)](),_0x1db415-=this[_0x2e2554(0xba)]()*0x2;const _0x3d7286=this[_0x2e2554(0x116)](_0x37c208);if(_0xae2abf==='center')_0x3477b0=_0x3477b0+Math[_0x2e2554(0x21c)]((_0x1db415-_0x3d7286['width'])/0x2);else _0xae2abf===_0x2e2554(0x35a)&&(_0x3477b0=_0x3477b0+_0x1db415-_0x3d7286['width']);_0x1b9aa9+=(this[_0x2e2554(0x107)]()-_0x3d7286[_0x2e2554(0x217)])/0x2,this['drawTextEx'](_0x37c208,_0x3477b0,_0x1b9aa9,_0x1db415),this[_0x2e2554(0x1c0)]=undefined,this['_resetFontColor']=undefined,this[_0x2e2554(0x1c3)]();},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0xea)]=function(_0x2801c2,_0x36966b,_0x33646c){const _0x561e2a=_0x1d9b69;if(!DataManager[_0x561e2a(0x345)](this[_0x561e2a(0x28e)]))return![];const _0x5769f9=this['getItemConsumableLabel']();this[_0x561e2a(0x3da)](_0x5769f9,_0x2801c2,_0x36966b,_0x33646c,!![]);const _0x351774=this[_0x561e2a(0x423)]();return this['drawItemKeyData'](_0x351774,_0x2801c2,_0x36966b,_0x33646c,![],'right'),this[_0x561e2a(0x3d2)](_0x2801c2,_0x36966b,_0x33646c),this[_0x561e2a(0x1c3)](),!![];},Window_ShopStatus['prototype']['getItemConsumableLabel']=function(){const _0x4a054b=_0x1d9b69;return VisuMZ[_0x4a054b(0x222)][_0x4a054b(0x351)][_0x4a054b(0x30f)][_0x4a054b(0x2e9)];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x423)]=function(){const _0x41d73e=_0x1d9b69,_0x28e3f2=_0x41d73e(0x33f);if(this[_0x41d73e(0x43c)][_0x28e3f2])return this[_0x41d73e(0x43c)][_0x28e3f2];return this[_0x41d73e(0x2dd)]()?VisuMZ['ItemsEquipsCore'][_0x41d73e(0x351)][_0x41d73e(0x30f)][_0x41d73e(0x2e3)]:VisuMZ['ItemsEquipsCore'][_0x41d73e(0x351)][_0x41d73e(0x30f)][_0x41d73e(0x324)];},Window_ShopStatus[_0x1d9b69(0x199)]['canConsumeItem']=function(){const _0x3d988c=_0x1d9b69;return VisuMZ[_0x3d988c(0x1ab)]&&VisuMZ[_0x3d988c(0x1ab)]['Settings'][_0x3d988c(0x1c1)][_0x3d988c(0x319)]&&DataManager[_0x3d988c(0x26d)](this[_0x3d988c(0x28e)])?![]:this[_0x3d988c(0x28e)][_0x3d988c(0x307)];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x130)]=function(_0x4f50ac,_0x11ffc4,_0x174984){const _0x4acc2c=_0x1d9b69;if(!this[_0x4acc2c(0x25b)]()&&!DataManager[_0x4acc2c(0x345)](this[_0x4acc2c(0x28e)]))return![];if(DataManager['isKeyItem'](this[_0x4acc2c(0x28e)])&&!$dataSystem[_0x4acc2c(0x365)]){const _0x323558=TextManager['keyItem'];this[_0x4acc2c(0x3da)](_0x323558,_0x4f50ac,_0x11ffc4,_0x174984,!![],_0x4acc2c(0x388));}else{const _0xb47453=TextManager['possession'];this[_0x4acc2c(0x3da)](_0xb47453,_0x4f50ac,_0x11ffc4,_0x174984,!![]);const _0x2b1bbb=this[_0x4acc2c(0xd1)]();this[_0x4acc2c(0x3da)](_0x2b1bbb,_0x4f50ac,_0x11ffc4,_0x174984,![],_0x4acc2c(0x35a));}return this[_0x4acc2c(0x3d2)](_0x4f50ac,_0x11ffc4,_0x174984),this[_0x4acc2c(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemQuantityText']=function(){const _0x4322a3=_0x1d9b69,_0x598fd0=_0x4322a3(0x1ca);if(this[_0x4322a3(0x43c)][_0x598fd0])return this[_0x4322a3(0x43c)][_0x598fd0];const _0x1f90c9=VisuMZ[_0x4322a3(0x222)]['Settings'][_0x4322a3(0x312)]['ItemQuantityFmt'];return _0x1f90c9['format']($gameParty[_0x4322a3(0x2d5)](this['_item']));},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0xf0)]=function(_0x178855,_0xa29211,_0x1dad58){const _0x41b976=_0x1d9b69,_0x2c4e28=this[_0x41b976(0x290)]();return this[_0x41b976(0x3da)](_0x2c4e28,_0x178855,_0xa29211,_0x1dad58,![],_0x41b976(0x388)),this['drawItemDarkRect'](_0x178855,_0xa29211,_0x1dad58),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x290)]=function(){const _0x4783e2=_0x1d9b69,_0x446135=_0x4783e2(0x14e);if(this[_0x4783e2(0x43c)][_0x446135])return this[_0x4783e2(0x43c)][_0x446135];const _0x52ea4a=VisuMZ[_0x4783e2(0x222)]['Settings'][_0x4783e2(0x30f)],_0x2c00d8=_0x4783e2(0x429)['format'](this[_0x4783e2(0x28e)]['occasion']);return _0x52ea4a[_0x2c00d8];},Window_ShopStatus['prototype'][_0x1d9b69(0x19f)]=function(_0x242ec4,_0x21e44d,_0x216d94){const _0x515e0c=_0x1d9b69,_0x398c08=this[_0x515e0c(0x379)]();return this['drawItemKeyData'](_0x398c08,_0x242ec4,_0x21e44d,_0x216d94,![],_0x515e0c(0x388)),this[_0x515e0c(0x3d2)](_0x242ec4,_0x21e44d,_0x216d94),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x379)]=function(){const _0x51db97=_0x1d9b69,_0xb228b4=_0x51db97(0x449);if(this['_customItemInfo'][_0xb228b4])return this[_0x51db97(0x43c)][_0xb228b4];const _0x2aad68=VisuMZ[_0x51db97(0x222)][_0x51db97(0x351)][_0x51db97(0x30f)];if(Imported[_0x51db97(0x1f5)]){const _0x27caad=this[_0x51db97(0x28e)][_0x51db97(0x3dc)];if(_0x27caad['match'](/<TARGET:[ ](.*)>/i)){const _0x1bf81b=String(RegExp['$1']);if(_0x1bf81b[_0x51db97(0x356)](/(\d+) RANDOM ANY/i))return _0x2aad68['ScopeRandomAny'][_0x51db97(0x13e)](Number(RegExp['$1']));else{if(_0x1bf81b['match'](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x2aad68['ScopeRandomEnemies']['format'](Number(RegExp['$1']));else{if(_0x1bf81b[_0x51db97(0x356)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x2aad68[_0x51db97(0x358)][_0x51db97(0x13e)](Number(RegExp['$1']));else{if(_0x1bf81b[_0x51db97(0x356)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x2aad68[_0x51db97(0x251)];}}}}}const _0x31a5c9=_0x51db97(0x30a)[_0x51db97(0x13e)](this[_0x51db97(0x28e)][_0x51db97(0x14d)]);return _0x2aad68[_0x31a5c9];},Window_ShopStatus['prototype']['drawItemSpeed']=function(_0x26ece0,_0x4b06d7,_0x29220b){const _0x54b7e6=_0x1d9b69,_0x32c9e2=this[_0x54b7e6(0x1c4)]();this['drawItemKeyData'](_0x32c9e2,_0x26ece0,_0x4b06d7,_0x29220b,!![]);const _0x10c35e=this[_0x54b7e6(0x20a)]();return this['drawItemKeyData'](_0x10c35e,_0x26ece0,_0x4b06d7,_0x29220b,![],_0x54b7e6(0x35a)),this[_0x54b7e6(0x3d2)](_0x26ece0,_0x4b06d7,_0x29220b),this[_0x54b7e6(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1c4)]=function(){const _0x332ac0=_0x1d9b69;return VisuMZ['ItemsEquipsCore'][_0x332ac0(0x351)]['StatusWindow']['LabelSpeed'];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x20a)]=function(){const _0x2f566e=_0x1d9b69,_0x1c3074=_0x2f566e(0x277);if(this['_customItemInfo'][_0x1c3074])return this[_0x2f566e(0x43c)][_0x1c3074];const _0x39c4c7=this[_0x2f566e(0x28e)][_0x2f566e(0x3cb)];if(_0x39c4c7>=0x7d0)return VisuMZ['ItemsEquipsCore'][_0x2f566e(0x351)][_0x2f566e(0x30f)]['Speed2000'];else{if(_0x39c4c7>=0x3e8)return VisuMZ['ItemsEquipsCore'][_0x2f566e(0x351)][_0x2f566e(0x30f)][_0x2f566e(0x226)];else{if(_0x39c4c7>0x0)return VisuMZ[_0x2f566e(0x222)]['Settings'][_0x2f566e(0x30f)][_0x2f566e(0x202)];else{if(_0x39c4c7===0x0)return VisuMZ[_0x2f566e(0x222)]['Settings'][_0x2f566e(0x30f)]['Speed0'];else{if(_0x39c4c7>-0x3e8)return VisuMZ['ItemsEquipsCore']['Settings'][_0x2f566e(0x30f)][_0x2f566e(0x1e7)];else{if(_0x39c4c7>-0x7d0)return VisuMZ[_0x2f566e(0x222)][_0x2f566e(0x351)][_0x2f566e(0x30f)]['SpeedNeg1999'];else return _0x39c4c7<=-0x7d0?VisuMZ[_0x2f566e(0x222)][_0x2f566e(0x351)]['StatusWindow'][_0x2f566e(0x140)]:_0x2f566e(0x1b2);}}}}}},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x382)]=function(_0x59e281,_0x2a534c,_0x43356f){const _0x134c54=_0x1d9b69,_0x345d03=this[_0x134c54(0x371)]();this[_0x134c54(0x3da)](_0x345d03,_0x59e281,_0x2a534c,_0x43356f,!![]);const _0x32ba5f=this[_0x134c54(0x3d3)]();return this[_0x134c54(0x3da)](_0x32ba5f,_0x59e281,_0x2a534c,_0x43356f,![],'right'),this[_0x134c54(0x3d2)](_0x59e281,_0x2a534c,_0x43356f),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x371)]=function(){const _0x2512fc=_0x1d9b69;return VisuMZ[_0x2512fc(0x222)][_0x2512fc(0x351)]['StatusWindow'][_0x2512fc(0x10a)];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3d3)]=function(){const _0xede822=_0x1d9b69,_0x20b78d=_0xede822(0x2cd);if(this[_0xede822(0x43c)][_0x20b78d])return this['_customItemInfo'][_0x20b78d];if(Imported[_0xede822(0x1f5)]){const _0x2badb0=this['_item'][_0xede822(0x3dc)];if(_0x2badb0[_0xede822(0x356)](/<ALWAYS HIT>/i))return'100%';else{if(_0x2badb0['match'](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0xede822(0x342)[_0xede822(0x13e)](Number(RegExp['$1']));}}return _0xede822(0x342)['format'](this[_0xede822(0x28e)][_0xede822(0x29f)]);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x24f)]=function(_0x399c89,_0x2cee9d,_0x29dcbb){const _0x1d223a=_0x1d9b69,_0x57af92=this[_0x1d223a(0x31c)]();this[_0x1d223a(0x3da)](_0x57af92,_0x399c89,_0x2cee9d,_0x29dcbb,!![]);const _0x770051=this[_0x1d223a(0x3d6)]();return this[_0x1d223a(0x3da)](_0x770051,_0x399c89,_0x2cee9d,_0x29dcbb,![],_0x1d223a(0x35a)),this[_0x1d223a(0x3d2)](_0x399c89,_0x2cee9d,_0x29dcbb),this[_0x1d223a(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemRepeatsLabel']=function(){const _0x5b37d9=_0x1d9b69;return VisuMZ[_0x5b37d9(0x222)][_0x5b37d9(0x351)]['StatusWindow']['LabelRepeats'];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemRepeatsText']=function(){const _0x2d3906=_0x1d9b69,_0x1347de=_0x2d3906(0x157);if(this[_0x2d3906(0x43c)][_0x1347de])return this['_customItemInfo'][_0x1347de];const _0x36e9b6=_0x2d3906(0xf3);return _0x36e9b6[_0x2d3906(0x13e)](this['_item'][_0x2d3906(0x15c)]);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x332)]=function(_0x4a37c0,_0x51e326,_0x556030){const _0x21ff33=_0x1d9b69,_0x3ae842=this[_0x21ff33(0x167)]();this[_0x21ff33(0x3da)](_0x3ae842,_0x4a37c0,_0x51e326,_0x556030,!![]);const _0x4a0d18=this[_0x21ff33(0x21d)]();return this['drawItemKeyData'](_0x4a0d18,_0x4a37c0,_0x51e326,_0x556030,![],'right'),this[_0x21ff33(0x3d2)](_0x4a37c0,_0x51e326,_0x556030),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x167)]=function(){const _0x4088c6=_0x1d9b69;return VisuMZ[_0x4088c6(0x222)][_0x4088c6(0x351)][_0x4088c6(0x30f)][_0x4088c6(0x208)];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemHitTypeText']=function(){const _0x493ddb=_0x1d9b69,_0x45b1b2=_0x493ddb(0xb1);if(this[_0x493ddb(0x43c)][_0x45b1b2])return this['_customItemInfo'][_0x45b1b2];const _0x42cc27=VisuMZ[_0x493ddb(0x222)][_0x493ddb(0x351)][_0x493ddb(0x30f)],_0x9a2836=_0x493ddb(0x441)[_0x493ddb(0x13e)](this[_0x493ddb(0x28e)][_0x493ddb(0x334)]);return _0x42cc27[_0x9a2836];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x13f)]=function(_0x4c1f9e,_0xc9a824,_0x2f1ff1){const _0x3e463a=_0x1d9b69;if(this[_0x3e463a(0x28e)]['damage']['type']<=0x0)return _0xc9a824;if(this[_0x3e463a(0x1ec)](_0x4c1f9e,_0xc9a824,_0x2f1ff1))_0xc9a824+=this[_0x3e463a(0x107)]();if(this[_0x3e463a(0x37c)](_0x4c1f9e,_0xc9a824,_0x2f1ff1))_0xc9a824+=this[_0x3e463a(0x107)]();return this[_0x3e463a(0x1c3)](),_0xc9a824;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1ec)]=function(_0x26023b,_0x4763a0,_0x438628){const _0x5530df=_0x1d9b69,_0xe0717=this[_0x5530df(0x21e)]();this[_0x5530df(0x3da)](_0xe0717,_0x26023b,_0x4763a0,_0x438628,!![]);const _0x2215dc=this[_0x5530df(0x249)]();return this[_0x5530df(0x3da)](_0x2215dc,_0x26023b,_0x4763a0,_0x438628,![],'right'),this[_0x5530df(0x3d2)](_0x26023b,_0x4763a0,_0x438628),this[_0x5530df(0x1c3)](),!![];},Window_ShopStatus['prototype'][_0x1d9b69(0x21e)]=function(){const _0x2eb2eb=_0x1d9b69;return VisuMZ[_0x2eb2eb(0x222)]['Settings'][_0x2eb2eb(0x30f)][_0x2eb2eb(0x2b3)];},Window_ShopStatus['prototype'][_0x1d9b69(0x249)]=function(){const _0x5750af=_0x1d9b69,_0x555623=_0x5750af(0x144);if(this[_0x5750af(0x43c)][_0x555623])return this[_0x5750af(0x43c)][_0x555623];if(this[_0x5750af(0x28e)]['damage']['elementId']<=-0x1)return VisuMZ[_0x5750af(0x222)]['Settings']['StatusWindow'][_0x5750af(0x3bd)];else return this[_0x5750af(0x28e)][_0x5750af(0xf8)]['elementId']===0x0?VisuMZ[_0x5750af(0x222)][_0x5750af(0x351)][_0x5750af(0x30f)][_0x5750af(0x1ff)]:$dataSystem[_0x5750af(0xc7)][this[_0x5750af(0x28e)]['damage']['elementId']];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x37c)]=function(_0x30474c,_0xc30026,_0x3b164b){const _0x2d7ada=_0x1d9b69,_0x5ea6df=this[_0x2d7ada(0x35f)]();this[_0x2d7ada(0x3da)](_0x5ea6df,_0x30474c,_0xc30026,_0x3b164b,!![]),this[_0x2d7ada(0x1b1)]();const _0x42903b=this[_0x2d7ada(0xcf)](),_0x58ede3=ColorManager[_0x2d7ada(0x19d)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x2d7ada(0x28e)]['damage'][_0x2d7ada(0x3c7)]]);return this[_0x2d7ada(0x120)](_0x58ede3),this[_0x2d7ada(0x3da)](_0x42903b,_0x30474c,_0xc30026,_0x3b164b,![],_0x2d7ada(0x35a)),this[_0x2d7ada(0x3d2)](_0x30474c,_0xc30026,_0x3b164b),this[_0x2d7ada(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemDamageAmountLabel']=function(){const _0x5116eb=_0x1d9b69;return Imported['VisuMZ_1_BattleCore']&&DataManager[_0x5116eb(0x132)](this[_0x5116eb(0x28e)])!==_0x5116eb(0x430)?this[_0x5116eb(0x2df)]():this[_0x5116eb(0x40e)]();},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x40e)]=function(){const _0x2eee27=_0x1d9b69,_0x22d05c=VisuMZ[_0x2eee27(0x222)][_0x2eee27(0x351)]['StatusWindow'],_0x24117c=_0x2eee27(0x2af)['format'](this[_0x2eee27(0x28e)][_0x2eee27(0xf8)]['type']),_0x1ddfbd=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0x2eee27(0x28e)][_0x2eee27(0xf8)][_0x2eee27(0x3c7)]];return _0x22d05c[_0x24117c][_0x2eee27(0x13e)](_0x1ddfbd);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1b1)]=function(){const _0x3c8a3a=_0x1d9b69,_0x49e18d=$gameActors['actor'](0x1);this[_0x3c8a3a(0x267)]=JsonEx[_0x3c8a3a(0x31b)](_0x49e18d),this[_0x3c8a3a(0x1ba)]=JsonEx[_0x3c8a3a(0x31b)](_0x49e18d);},Window_ShopStatus[_0x1d9b69(0x199)]['getItemDamageAmountText']=function(){const _0x4a6b39=_0x1d9b69,_0x3bff2e='DAMAGE\x20MULTIPLIER';if(this[_0x4a6b39(0x43c)][_0x3bff2e])return this[_0x4a6b39(0x43c)][_0x3bff2e];return Imported[_0x4a6b39(0x1f5)]&&DataManager[_0x4a6b39(0x132)](this[_0x4a6b39(0x28e)])!==_0x4a6b39(0x430)?this[_0x4a6b39(0x2b6)]():this[_0x4a6b39(0xed)]();},Window_ShopStatus['prototype']['getItemDamageAmountTextOriginal']=function(){const _0x237d66=_0x1d9b69;window['a']=this[_0x237d66(0x267)],window['b']=this[_0x237d66(0x1ba)],this['_tempActorA'][_0x237d66(0x166)](!![]),this['_tempActorB'][_0x237d66(0x166)]([0x3,0x4][_0x237d66(0x22a)](this[_0x237d66(0x28e)][_0x237d66(0xf8)]['type']));let _0x32b533=this['_item'][_0x237d66(0xf8)][_0x237d66(0x16e)];try{const _0xbb0ab0=Math[_0x237d66(0xef)](eval(_0x32b533),0x0)/window['a'][_0x237d66(0x197)];return this[_0x237d66(0x22b)](),isNaN(_0xbb0ab0)?'?????':_0x237d66(0x342)[_0x237d66(0x13e)](Math['round'](_0xbb0ab0*0x64));}catch(_0x8f6583){return $gameTemp[_0x237d66(0x446)]()&&(console[_0x237d66(0x1bb)](_0x237d66(0x38c)['format'](this[_0x237d66(0x28e)]['name'])),console[_0x237d66(0x1bb)](_0x8f6583)),this[_0x237d66(0x22b)](),_0x237d66(0x1b2);}},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x22b)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x2d0)]=function(_0x2d3e8f,_0x4cf63d,_0x1f9576){const _0x119b8f=_0x1d9b69;if(!this[_0x119b8f(0x3fd)]())return _0x4cf63d;if(this['drawItemEffectsHpRecovery'](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();if(this[_0x119b8f(0x1b9)](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this['lineHeight']();if(this[_0x119b8f(0x45c)](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();if(this[_0x119b8f(0x122)](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();if(this[_0x119b8f(0x390)](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();if(this['drawItemEffectsTpDamage'](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();if(this['drawItemEffectsSelfTpGain'](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();if(this[_0x119b8f(0x3bc)](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();if(this['drawItemEffectsRemovedStatesBuffs'](_0x2d3e8f,_0x4cf63d,_0x1f9576))_0x4cf63d+=this[_0x119b8f(0x107)]();return this[_0x119b8f(0x1c3)](),_0x4cf63d;},Window_ShopStatus['prototype'][_0x1d9b69(0x232)]=function(){const _0x54af30=_0x1d9b69;return this['_item'][_0x54af30(0xf6)];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3fd)]=function(){const _0x3e5f82=_0x1d9b69;let _0x4cae82=![];this[_0x3e5f82(0x35d)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x3cbcac=this[_0x3e5f82(0x232)]();for(const _0x431ae3 of _0x3cbcac){switch(_0x431ae3[_0x3e5f82(0xfe)]){case Game_Action['EFFECT_RECOVER_HP']:this[_0x3e5f82(0x35d)][_0x3e5f82(0x3b8)]+=_0x431ae3[_0x3e5f82(0x3c3)],this[_0x3e5f82(0x35d)][_0x3e5f82(0x135)]+=_0x431ae3[_0x3e5f82(0x184)],_0x4cae82=!![];break;case Game_Action[_0x3e5f82(0x21b)]:this[_0x3e5f82(0x35d)]['rateMP']+=_0x431ae3[_0x3e5f82(0x3c3)],this[_0x3e5f82(0x35d)][_0x3e5f82(0x310)]+=_0x431ae3[_0x3e5f82(0x184)],_0x4cae82=!![];break;case Game_Action[_0x3e5f82(0xb5)]:this[_0x3e5f82(0x35d)][_0x3e5f82(0x133)]+=_0x431ae3[_0x3e5f82(0x3c3)],_0x4cae82=!![];break;case Game_Action[_0x3e5f82(0x21a)]:this[_0x3e5f82(0x35d)][_0x3e5f82(0x44c)]['push'](_0x431ae3['dataId']),_0x4cae82=!![];break;case Game_Action[_0x3e5f82(0x270)]:this[_0x3e5f82(0x35d)][_0x3e5f82(0x235)]['push'](_0x431ae3['dataId']),this['_itemData'][_0x3e5f82(0x402)]=!![],_0x4cae82=!![];break;case Game_Action[_0x3e5f82(0x13b)]:this['_itemData'][_0x3e5f82(0x2f6)][_0x431ae3[_0x3e5f82(0x1ed)]]+=0x1,_0x4cae82=!![];break;case Game_Action[_0x3e5f82(0x179)]:this[_0x3e5f82(0x35d)][_0x3e5f82(0x2f6)][_0x431ae3[_0x3e5f82(0x1ed)]]-=0x1,_0x4cae82=!![];break;case Game_Action['EFFECT_REMOVE_BUFF']:this[_0x3e5f82(0x35d)][_0x3e5f82(0x401)][_0x3e5f82(0xc3)](_0x431ae3[_0x3e5f82(0x1ed)]),this[_0x3e5f82(0x35d)][_0x3e5f82(0x402)]=!![],_0x4cae82=!![];break;case Game_Action['EFFECT_REMOVE_DEBUFF']:this[_0x3e5f82(0x35d)]['removeDebuff'][_0x3e5f82(0xc3)](_0x431ae3[_0x3e5f82(0x1ed)]),this[_0x3e5f82(0x35d)][_0x3e5f82(0x402)]=!![],_0x4cae82=!![];break;}}if(this[_0x3e5f82(0x35d)]['addState'][_0x3e5f82(0x440)]>0x0)this[_0x3e5f82(0x35d)][_0x3e5f82(0x352)]=!![];for(let _0x493ba1=0x0;_0x493ba1<this[_0x3e5f82(0x35d)]['changeBuff']['length'];_0x493ba1++){if(this[_0x3e5f82(0x35d)][_0x3e5f82(0x2f6)][_0x493ba1]!==0x0)this[_0x3e5f82(0x35d)][_0x3e5f82(0x352)]=!![];}this[_0x3e5f82(0x28e)][_0x3e5f82(0x1a5)]!==0x0&&(this[_0x3e5f82(0x35d)][_0x3e5f82(0xcc)]=this[_0x3e5f82(0x28e)][_0x3e5f82(0x1a5)],_0x4cae82=!![]);const _0x49f929=['HP\x20RECOVERY',_0x3e5f82(0x394),_0x3e5f82(0x344),_0x3e5f82(0x209),'MP\x20DAMAGE',_0x3e5f82(0x287),_0x3e5f82(0x2fa),'ADDED\x20EFFECTS','REMOVED\x20EFFECTS'];for(const _0x24d847 of _0x49f929){if(this[_0x3e5f82(0x43c)][_0x24d847]){_0x4cae82=!![];break;}}return _0x4cae82;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x123)]=function(_0x293c5d,_0xd8ff77,_0x2daea4){const _0x522521=_0x1d9b69,_0x105920=_0x522521(0x2ab);if(this[_0x522521(0x35d)][_0x522521(0x3b8)]<=0x0&&this[_0x522521(0x35d)][_0x522521(0x135)]<=0x0&&!this[_0x522521(0x43c)][_0x105920])return![];const _0x3d519d=this[_0x522521(0x36b)]();this[_0x522521(0x3da)](_0x3d519d,_0x293c5d,_0xd8ff77,_0x2daea4,!![]);const _0x4a70e9=this['getItemEffectsHpRecoveryText']();return this['changeTextColor'](ColorManager[_0x522521(0x19d)](0x1)),this['drawItemKeyData'](_0x4a70e9,_0x293c5d,_0xd8ff77,_0x2daea4,![],_0x522521(0x35a)),this['drawItemDarkRect'](_0x293c5d,_0xd8ff77,_0x2daea4),this[_0x522521(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x36b)]=function(){const _0x5da604=_0x1d9b69,_0x178b8e=VisuMZ[_0x5da604(0x222)][_0x5da604(0x351)][_0x5da604(0x30f)][_0x5da604(0x420)];return _0x178b8e['format'](TextManager['hp']);},Window_ShopStatus['prototype'][_0x1d9b69(0x1fa)]=function(){const _0x4224d7=_0x1d9b69,_0x52a437=_0x4224d7(0x2ab);if(this[_0x4224d7(0x43c)][_0x52a437])return this['_customItemInfo'][_0x52a437];let _0x3dd5ef='';if(this[_0x4224d7(0x35d)][_0x4224d7(0x3b8)]>0x0)_0x3dd5ef+='+%1%'['format'](Math[_0x4224d7(0x21c)](this[_0x4224d7(0x35d)][_0x4224d7(0x3b8)]*0x64));if(this[_0x4224d7(0x35d)][_0x4224d7(0x3b8)]>0x0&&this['_itemData'][_0x4224d7(0x135)]>0x0)_0x3dd5ef+='\x20';if(this[_0x4224d7(0x35d)][_0x4224d7(0x135)]>0x0)_0x3dd5ef+=_0x4224d7(0x3c6)[_0x4224d7(0x13e)](this[_0x4224d7(0x35d)][_0x4224d7(0x135)]);return _0x3dd5ef;},Window_ShopStatus['prototype'][_0x1d9b69(0x1b9)]=function(_0x52075e,_0xb0b62b,_0x4b795b){const _0x54772d=_0x1d9b69,_0x425b56='MP\x20RECOVERY';if(this[_0x54772d(0x35d)][_0x54772d(0x201)]<=0x0&&this['_itemData'][_0x54772d(0x310)]<=0x0&&!this['_customItemInfo'][_0x425b56])return![];const _0x3019da=this['getItemEffectsMpRecoveryLabel']();this[_0x54772d(0x3da)](_0x3019da,_0x52075e,_0xb0b62b,_0x4b795b,!![]);const _0x411e96=this['getItemEffectsMpRecoveryText']();return this['changeTextColor'](ColorManager[_0x54772d(0x19d)](0x3)),this['drawItemKeyData'](_0x411e96,_0x52075e,_0xb0b62b,_0x4b795b,![],'right'),this['drawItemDarkRect'](_0x52075e,_0xb0b62b,_0x4b795b),this[_0x54772d(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3f0)]=function(){const _0x169235=_0x1d9b69,_0x21e286=VisuMZ['ItemsEquipsCore']['Settings']['StatusWindow']['LabelRecoverMP'];return _0x21e286[_0x169235(0x13e)](TextManager['mp']);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1e5)]=function(){const _0x22f390=_0x1d9b69,_0x2aa8a4=_0x22f390(0x394);if(this[_0x22f390(0x43c)][_0x2aa8a4])return this['_customItemInfo'][_0x2aa8a4];let _0x351d34='';if(this[_0x22f390(0x35d)][_0x22f390(0x201)]>0x0)_0x351d34+=_0x22f390(0x2ca)[_0x22f390(0x13e)](Math[_0x22f390(0x21c)](this[_0x22f390(0x35d)][_0x22f390(0x201)]*0x64));if(this['_itemData'][_0x22f390(0x201)]>0x0&&this[_0x22f390(0x35d)][_0x22f390(0x310)]>0x0)_0x351d34+='\x20';if(this[_0x22f390(0x35d)][_0x22f390(0x310)]>0x0)_0x351d34+=_0x22f390(0x3c6)[_0x22f390(0x13e)](this[_0x22f390(0x35d)][_0x22f390(0x310)]);return _0x351d34;},Window_ShopStatus['prototype']['drawItemEffectsTpRecovery']=function(_0x29aa5a,_0x5f2516,_0x216901){const _0x32c185=_0x1d9b69,_0x5e5fb9=_0x32c185(0x344);if(this['_itemData'][_0x32c185(0x133)]<=0x0&&!this[_0x32c185(0x43c)][_0x5e5fb9])return![];const _0xb5db58=this[_0x32c185(0x2aa)]();this[_0x32c185(0x3da)](_0xb5db58,_0x29aa5a,_0x5f2516,_0x216901,!![]);const _0x13285f=this['getItemEffectsTpRecoveryText']();return this[_0x32c185(0x120)](ColorManager[_0x32c185(0x302)]()),this[_0x32c185(0x3da)](_0x13285f,_0x29aa5a,_0x5f2516,_0x216901,![],'right'),this[_0x32c185(0x3d2)](_0x29aa5a,_0x5f2516,_0x216901),this[_0x32c185(0x1c3)](),!![];},Window_ShopStatus['prototype'][_0x1d9b69(0x2aa)]=function(){const _0x33bfcc=_0x1d9b69,_0x3c7a9b=VisuMZ[_0x33bfcc(0x222)]['Settings']['StatusWindow'][_0x33bfcc(0xb0)];return _0x3c7a9b['format'](TextManager['tp']);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x38b)]=function(){const _0x4b9898=_0x1d9b69,_0x758728='TP\x20RECOVERY';if(this['_customItemInfo'][_0x758728])return this[_0x4b9898(0x43c)][_0x758728];let _0x1e3222='';return _0x1e3222+=_0x4b9898(0x3c6)['format'](this[_0x4b9898(0x35d)][_0x4b9898(0x133)]),_0x1e3222;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x16c)]=function(_0x3f43dd,_0x565c53,_0x5464cc){const _0x2e3b64=_0x1d9b69,_0x555f28=_0x2e3b64(0x2fa);if(this['_itemData'][_0x2e3b64(0xcc)]===0x0&&!this[_0x2e3b64(0x43c)][_0x555f28])return![];const _0x3968fa=this[_0x2e3b64(0x3e7)]();this[_0x2e3b64(0x3da)](_0x3968fa,_0x3f43dd,_0x565c53,_0x5464cc,!![]);const _0x4df831=this[_0x2e3b64(0x39e)]();return this[_0x2e3b64(0x35d)]['selfTP']>0x0?this[_0x2e3b64(0x120)](ColorManager['powerUpColor']()):this['changeTextColor'](ColorManager[_0x2e3b64(0x3e9)]()),this[_0x2e3b64(0x3da)](_0x4df831,_0x3f43dd,_0x565c53,_0x5464cc,![],_0x2e3b64(0x35a)),this[_0x2e3b64(0x3d2)](_0x3f43dd,_0x565c53,_0x5464cc),this[_0x2e3b64(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3e7)]=function(){const _0xc82541=_0x1d9b69,_0x3d1205=VisuMZ[_0xc82541(0x222)][_0xc82541(0x351)]['StatusWindow'][_0xc82541(0x44b)];return _0x3d1205['format'](TextManager['tp']);},Window_ShopStatus['prototype'][_0x1d9b69(0x39e)]=function(){const _0x4a9909=_0x1d9b69,_0x5c567d=_0x4a9909(0x2fa);if(this['_customItemInfo'][_0x5c567d])return this[_0x4a9909(0x43c)][_0x5c567d];let _0x5c2080='';return this[_0x4a9909(0x35d)]['selfTP']>0x0?_0x5c2080+='+%1'[_0x4a9909(0x13e)](this[_0x4a9909(0x35d)][_0x4a9909(0xcc)]):_0x5c2080+='%1'['format'](this['_itemData'][_0x4a9909(0xcc)]),_0x5c2080;},Window_ShopStatus[_0x1d9b69(0x199)]['drawItemEffectsHpDamage']=function(_0x57e872,_0x3153f3,_0x4c8291){const _0x37cdb9=_0x1d9b69,_0x7460f8=_0x37cdb9(0x209);if(this[_0x37cdb9(0x35d)]['rateHP']>=0x0&&this[_0x37cdb9(0x35d)]['flatHP']>=0x0&&!this[_0x37cdb9(0x43c)][_0x7460f8])return![];const _0x2177e7=this[_0x37cdb9(0x3a7)]();this[_0x37cdb9(0x3da)](_0x2177e7,_0x57e872,_0x3153f3,_0x4c8291,!![]);const _0xea5367=this['getItemEffectsHpDamageText']();return this[_0x37cdb9(0x120)](ColorManager[_0x37cdb9(0x19d)](0x0)),this[_0x37cdb9(0x3da)](_0xea5367,_0x57e872,_0x3153f3,_0x4c8291,![],_0x37cdb9(0x35a)),this[_0x37cdb9(0x3d2)](_0x57e872,_0x3153f3,_0x4c8291),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemEffectsHpDamageLabel']=function(){const _0x22cf66=_0x1d9b69,_0x357838=VisuMZ[_0x22cf66(0x222)][_0x22cf66(0x351)][_0x22cf66(0x30f)][_0x22cf66(0x231)];return _0x357838['format'](TextManager['hp']);},Window_ShopStatus['prototype'][_0x1d9b69(0xc0)]=function(){const _0x7dcf25=_0x1d9b69,_0x50e176='HP\x20DAMAGE';if(this[_0x7dcf25(0x43c)][_0x50e176])return this[_0x7dcf25(0x43c)][_0x50e176];let _0x773623='';if(this['_itemData'][_0x7dcf25(0x3b8)]<0x0)_0x773623+=_0x7dcf25(0x342)['format'](Math[_0x7dcf25(0x21c)](this['_itemData']['rateHP']*0x64));if(this[_0x7dcf25(0x35d)][_0x7dcf25(0x3b8)]<0x0&&this['_itemData'][_0x7dcf25(0x135)]<0x0)_0x773623+='\x20';if(this['_itemData'][_0x7dcf25(0x135)]<0x0)_0x773623+='%1'[_0x7dcf25(0x13e)](this[_0x7dcf25(0x35d)]['flatHP']);return _0x773623;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x390)]=function(_0x4736e6,_0x276716,_0x31324d){const _0x28c488=_0x1d9b69,_0x4d51aa='MP\x20DAMAGE';if(this[_0x28c488(0x35d)][_0x28c488(0x201)]>=0x0&&this[_0x28c488(0x35d)][_0x28c488(0x310)]>=0x0&&!this[_0x28c488(0x43c)][_0x4d51aa])return![];const _0x10b013=this[_0x28c488(0x340)]();this[_0x28c488(0x3da)](_0x10b013,_0x4736e6,_0x276716,_0x31324d,!![]);const _0x58c01d=this[_0x28c488(0x416)]();return this['changeTextColor'](ColorManager['damageColor'](0x2)),this['drawItemKeyData'](_0x58c01d,_0x4736e6,_0x276716,_0x31324d,![],'right'),this[_0x28c488(0x3d2)](_0x4736e6,_0x276716,_0x31324d),this[_0x28c488(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemEffectsMpDamageLabel']=function(){const _0x3377bb=_0x1d9b69,_0x39aa98=VisuMZ['ItemsEquipsCore'][_0x3377bb(0x351)][_0x3377bb(0x30f)]['LabelDamageMP'];return _0x39aa98[_0x3377bb(0x13e)](TextManager['mp']);},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x416)]=function(){const _0x2d31bd=_0x1d9b69,_0x5cef49='MP\x20DAMAGE';if(this[_0x2d31bd(0x43c)][_0x5cef49])return this[_0x2d31bd(0x43c)][_0x5cef49];let _0x18d080='';if(this[_0x2d31bd(0x35d)][_0x2d31bd(0x201)]<0x0)_0x18d080+=_0x2d31bd(0x342)[_0x2d31bd(0x13e)](Math['floor'](this[_0x2d31bd(0x35d)]['rateMP']*0x64));if(this['_itemData'][_0x2d31bd(0x201)]<0x0&&this[_0x2d31bd(0x35d)][_0x2d31bd(0x310)]<0x0)_0x18d080+='\x20';if(this['_itemData'][_0x2d31bd(0x310)]<0x0)_0x18d080+='%1'[_0x2d31bd(0x13e)](this[_0x2d31bd(0x35d)][_0x2d31bd(0x310)]);return _0x18d080;},Window_ShopStatus[_0x1d9b69(0x199)]['drawItemEffectsTpDamage']=function(_0x1ceefc,_0x208b56,_0x1bbeae){const _0x3779fa=_0x1d9b69,_0x3ba895=_0x3779fa(0x287);if(this[_0x3779fa(0x35d)][_0x3779fa(0x133)]>=0x0&&!this[_0x3779fa(0x43c)][_0x3ba895])return![];const _0x5e0e34=this['getItemEffectsTpDamageLabel']();this[_0x3779fa(0x3da)](_0x5e0e34,_0x1ceefc,_0x208b56,_0x1bbeae,!![]);const _0x34c5aa=this['getItemEffectsTpDamageText']();return this[_0x3779fa(0x120)](ColorManager[_0x3779fa(0x3e9)]()),this['drawItemKeyData'](_0x34c5aa,_0x1ceefc,_0x208b56,_0x1bbeae,![],_0x3779fa(0x35a)),this['drawItemDarkRect'](_0x1ceefc,_0x208b56,_0x1bbeae),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype'][_0x1d9b69(0x1da)]=function(){const _0x74e87e=_0x1d9b69,_0x4b28e9=VisuMZ[_0x74e87e(0x222)]['Settings']['StatusWindow'][_0x74e87e(0x100)];return _0x4b28e9['format'](TextManager['tp']);},Window_ShopStatus[_0x1d9b69(0x199)]['getItemEffectsTpDamageText']=function(){const _0x26031b=_0x1d9b69,_0x18df38=_0x26031b(0x287);if(this[_0x26031b(0x43c)][_0x18df38])return this['_customItemInfo'][_0x18df38];let _0x16b445='';return _0x16b445+='%1'[_0x26031b(0x13e)](this[_0x26031b(0x35d)][_0x26031b(0x133)]),_0x16b445;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x3bc)]=function(_0x408ce2,_0x5c0ced,_0x2dd0e3){const _0x1c8532=_0x1d9b69,_0x234651='ADDED\x20EFFECTS';if(!this[_0x1c8532(0x35d)][_0x1c8532(0x352)]&&!this['_customItemInfo'][_0x234651])return![];const _0x37b9f4=this[_0x1c8532(0x323)]();this[_0x1c8532(0x3da)](_0x37b9f4,_0x408ce2,_0x5c0ced,_0x2dd0e3,!![]);const _0x13983b=this[_0x1c8532(0x1fd)]();return this[_0x1c8532(0x3da)](_0x13983b,_0x408ce2,_0x5c0ced,_0x2dd0e3,![],_0x1c8532(0x35a)),this['drawItemDarkRect'](_0x408ce2,_0x5c0ced,_0x2dd0e3),this[_0x1c8532(0x1c3)](),!![];},Window_ShopStatus['prototype'][_0x1d9b69(0x323)]=function(){const _0x441d74=_0x1d9b69;return VisuMZ[_0x441d74(0x222)][_0x441d74(0x351)][_0x441d74(0x30f)]['LabelApply'];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x1fd)]=function(){const _0x1e5929=_0x1d9b69,_0x551b5f='ADDED\x20EFFECTS';if(this[_0x1e5929(0x43c)][_0x551b5f])return this[_0x1e5929(0x43c)][_0x551b5f];let _0x20995a='',_0x62981=0x0;const _0x448096=0x8;for(const _0x3074c7 of this[_0x1e5929(0x35d)][_0x1e5929(0x44c)]){const _0x4a9b45=$dataStates[_0x3074c7];if(_0x4a9b45&&_0x4a9b45['iconIndex']>0x0){_0x20995a+=_0x1e5929(0x303)[_0x1e5929(0x13e)](_0x4a9b45['iconIndex']),_0x62981++;if(_0x62981>=_0x448096)return _0x20995a;}}for(let _0x2c392d=0x0;_0x2c392d<this['_itemData'][_0x1e5929(0x2f6)][_0x1e5929(0x440)];_0x2c392d++){const _0x5550aa=this['_itemData']['changeBuff'][_0x2c392d],_0x44a719=Game_BattlerBase[_0x1e5929(0x199)][_0x1e5929(0x3c0)](_0x5550aa,_0x2c392d);if(_0x44a719>0x0){_0x20995a+=_0x1e5929(0x303)[_0x1e5929(0x13e)](_0x44a719),_0x62981++;if(_0x62981>=_0x448096)return _0x20995a;}}return _0x20995a;},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x25a)]=function(_0x4fbd78,_0x5328f7,_0x634b8f){const _0x5d4916=_0x1d9b69,_0x31d73e=_0x5d4916(0x3f1);if(!this['_itemData'][_0x5d4916(0x402)]&&!this[_0x5d4916(0x43c)][_0x31d73e])return![];const _0x1361b1=this[_0x5d4916(0x36d)]();this[_0x5d4916(0x3da)](_0x1361b1,_0x4fbd78,_0x5328f7,_0x634b8f,!![]);const _0x3b60b6=this[_0x5d4916(0x285)]();return this[_0x5d4916(0x3da)](_0x3b60b6,_0x4fbd78,_0x5328f7,_0x634b8f,![],_0x5d4916(0x35a)),this['drawItemDarkRect'](_0x4fbd78,_0x5328f7,_0x634b8f),this[_0x5d4916(0x1c3)](),!![];},Window_ShopStatus[_0x1d9b69(0x199)]['getItemEffectsRemovedStatesBuffsLabel']=function(){const _0x8038e1=_0x1d9b69;return VisuMZ[_0x8038e1(0x222)][_0x8038e1(0x351)][_0x8038e1(0x30f)][_0x8038e1(0x206)];},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x285)]=function(){const _0x13bfe5=_0x1d9b69,_0xbdf25=_0x13bfe5(0x3f1);if(this['_customItemInfo'][_0xbdf25])return this[_0x13bfe5(0x43c)][_0xbdf25];let _0x442e73='',_0x29e917=0x0;const _0x73da81=VisuMZ[_0x13bfe5(0x222)][_0x13bfe5(0x351)][_0x13bfe5(0x30f)][_0x13bfe5(0x260)];for(const _0x4d3a20 of this[_0x13bfe5(0x35d)][_0x13bfe5(0x235)]){const _0x515af0=$dataStates[_0x4d3a20];if(_0x515af0&&_0x515af0[_0x13bfe5(0x318)]>0x0){_0x442e73+='\x5cI[%1]'[_0x13bfe5(0x13e)](_0x515af0[_0x13bfe5(0x318)]),_0x29e917++;if(_0x29e917>=_0x73da81)return _0x442e73;}}for(let _0x5dcbcf=0x0;_0x5dcbcf<this[_0x13bfe5(0x35d)]['removeBuff'][_0x13bfe5(0x440)];_0x5dcbcf++){const _0x2c4f0e=Game_BattlerBase[_0x13bfe5(0x199)]['buffIconIndex'](0x1,_0x5dcbcf);if(_0x2c4f0e>0x0){_0x442e73+=_0x13bfe5(0x303)[_0x13bfe5(0x13e)](_0x2c4f0e),_0x29e917++;if(_0x29e917>=_0x73da81)return _0x442e73;}}for(let _0x7b89bc=0x0;_0x7b89bc<this[_0x13bfe5(0x35d)][_0x13bfe5(0x370)][_0x13bfe5(0x440)];_0x7b89bc++){const _0x1c3b66=Game_BattlerBase[_0x13bfe5(0x199)][_0x13bfe5(0x3c0)](-0x1,_0x7b89bc);if(_0x1c3b66>0x0){_0x442e73+=_0x13bfe5(0x303)['format'](_0x1c3b66),_0x29e917++;if(_0x29e917>=_0x73da81)return _0x442e73;}}return _0x442e73;},Window_ShopStatus['prototype'][_0x1d9b69(0x1f8)]=function(_0x9aee5b,_0x2a7d2f,_0x401240){const _0x40f613=_0x1d9b69;if(this['_item']['note']['match'](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x1873b6=String(RegExp['$1'])[_0x40f613(0x26c)](/[\r\n]+/);for(const _0x536562 of _0x1873b6){if(_0x536562[_0x40f613(0x356)](/(.*):[ ](.*)/i)){const _0x38c398=String(RegExp['$1'])[_0x40f613(0x3a0)](),_0x101579=String(RegExp['$2'])[_0x40f613(0x3a0)]();this['drawItemCustomEntryLine'](_0x38c398,_0x101579,_0x9aee5b,_0x2a7d2f,_0x401240),_0x2a7d2f+=this[_0x40f613(0x107)]();}}}return this[_0x40f613(0x1c3)](),_0x2a7d2f;},Window_ShopStatus[_0x1d9b69(0x199)]['drawItemCustomEntryLine']=function(_0x1d33af,_0x25b1c6,_0x4839b8,_0x300ad4,_0x2d1eb6){const _0x271178=_0x1d9b69;this[_0x271178(0x3da)](_0x1d33af,_0x4839b8,_0x300ad4,_0x2d1eb6,!![]),this[_0x271178(0x3da)](_0x25b1c6,_0x4839b8,_0x300ad4,_0x2d1eb6,![],_0x271178(0x35a)),this[_0x271178(0x3d2)](_0x4839b8,_0x300ad4,_0x2d1eb6),this[_0x271178(0x1c3)]();},Window_ShopStatus[_0x1d9b69(0x199)][_0x1d9b69(0x291)]=function(){const _0x37453c=_0x1d9b69;if(!this[_0x37453c(0x28e)])return;const _0xe62cf7=this['_item'][_0x37453c(0x3dc)],_0xdc6949=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x322c0d=_0xe62cf7[_0x37453c(0x356)](_0xdc6949);if(_0x322c0d)for(const _0x290151 of _0x322c0d){_0x290151[_0x37453c(0x356)](_0xdc6949);const _0x1f806d=String(RegExp['$1'])[_0x37453c(0x3a0)]()||'';if(_0x1f806d==='')continue;const _0x3818fa=ImageManager[_0x37453c(0x3d1)](_0x1f806d);_0x3818fa[_0x37453c(0xc8)](this[_0x37453c(0x459)][_0x37453c(0x2ae)](this,_0x3818fa,this[_0x37453c(0x28e)]));}},Window_ShopStatus[_0x1d9b69(0x199)]['drawCustomShopGraphicLoad']=function(_0x2199ad,_0x49b13d){const _0x3fc685=_0x1d9b69;if(this[_0x3fc685(0x28e)]!==_0x49b13d)return;if(!_0x2199ad)return;if(_0x2199ad[_0x3fc685(0x364)]<=0x0||_0x2199ad[_0x3fc685(0x217)]<=0x0)return;const _0x486560=_0x49b13d[_0x3fc685(0x3dc)];let _0x1c96ac='background';_0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0x1c96ac=_0x3fc685(0x30b));const _0x5dda33=_0x1c96ac===_0x3fc685(0x400)?this[_0x3fc685(0x34c)]:this[_0x3fc685(0x337)];let _0x33baae=this['innerWidth'],_0x1ce4cf=this['innerHeight'];_0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x33baae=Number(RegExp['$1']));_0x486560['match'](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x1ce4cf=Number(RegExp['$1']));_0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0x33baae=Number(RegExp['$1']),_0x1ce4cf=Number(RegExp['$2']));const _0x135e37=Math['min'](0x1,_0x33baae/_0x2199ad[_0x3fc685(0x364)],_0x1ce4cf/_0x2199ad[_0x3fc685(0x217)]);let _0x17424e=0x0,_0x1c69ff=0x0,_0x5b42a7=Math[_0x3fc685(0x21c)](_0x2199ad['width']*_0x135e37),_0x5c931f=Math[_0x3fc685(0x21c)](_0x2199ad['height']*_0x135e37),_0x39b6b4=_0x3fc685(0x388);_0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x39b6b4=String(RegExp['$1'])[_0x3fc685(0x1bd)]()[_0x3fc685(0x3a0)]());if(_0x39b6b4===_0x3fc685(0x386))_0x17424e=0x0;else _0x39b6b4===_0x3fc685(0x388)?_0x17424e=Math[_0x3fc685(0x3a6)]((this[_0x3fc685(0x2e6)]-_0x5b42a7)/0x2):_0x17424e=this[_0x3fc685(0x2e6)]-_0x5b42a7;let _0x5f2fde=_0x3fc685(0x330);_0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x5f2fde=String(RegExp['$1'])[_0x3fc685(0x1bd)]()[_0x3fc685(0x3a0)]());if(_0x5f2fde==='top')_0x1c69ff=0x0;else _0x5f2fde===_0x3fc685(0x330)?_0x1c69ff=Math['round']((this['innerHeight']-_0x5c931f)/0x2):_0x1c69ff=this[_0x3fc685(0x207)]-_0x5c931f;_0x486560['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x17424e+=Number(RegExp['$1']));_0x486560['match'](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x1c69ff+=Number(RegExp['$1']));_0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x17424e+=Number(RegExp['$1']),_0x1c69ff+=Number(RegExp['$2']));let _0x2b1843=0xff;if(_0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0x2b1843=Number(RegExp['$1']);else _0x486560[_0x3fc685(0x356)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x2b1843=Math[_0x3fc685(0x3a6)](Number(RegExp['$1'])*0.01*0xff)['clamp'](0x0,0xff));_0x5dda33[_0x3fc685(0x2e7)]=_0x2b1843,_0x5dda33[_0x3fc685(0x2c9)](_0x2199ad,0x0,0x0,_0x2199ad['width'],_0x2199ad[_0x3fc685(0x217)],_0x17424e,_0x1c69ff,_0x5b42a7,_0x5c931f),_0x5dda33['paintOpacity']=0xff;};