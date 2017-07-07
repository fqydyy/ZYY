
function SuperType() {
    this.property="super";
}
SuperType.prototype.getSuperValue=function () {
    return this.property;
}

function SubType() {
    this.subproperty="Sub";
}
SubType.prototype=new SuperType();

SubType.prototype.getSubpropertyValue=function () {
    return this.subproperty;
}
var instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.property);