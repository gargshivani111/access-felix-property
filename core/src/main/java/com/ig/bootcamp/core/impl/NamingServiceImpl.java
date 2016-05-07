package com.ig.bootcamp.core.impl;

import com.ig.bootcamp.core.NamingService;
import org.apache.felix.scr.annotations.*;
import org.apache.sling.commons.osgi.PropertiesUtil;
import org.osgi.service.component.ComponentContext;
import java.util.Map;

/**
 * @author shivani
 */
@Component(immediate = true,metatype=true)
@Service(NamingService.class)
public class NamingServiceImpl implements NamingService{
    private String name;
    private String gender;
    private boolean checkbox;
    private String [] multiString;
    int age;



    /*

         * Name Constant Provides a consistent way to access the Felix's console Author's name property
         * also specifies, the default value of the variable
         */
    @Property(label="Name of the Author",value = "author")
    private static final String AUTHOR_NAME = "author.value";
    /*

        * Age Constant Provides a consistent way to access the Felix's console Author's age property
        * also specifies, the default value of the variable as integer value
        */
    @Property(label="Age of the Author",intValue = 15)
    private static final String AUTHOR_AGE = "author.age";


    /*
     * Gender Constant with which to access the Felix's console Author's Gender property
     * also specified, default value of the variable as well as values for options i.e. DropDown for Felix's console Property
     */
    @Property(
        label = "Author Gender",
        description = "Describe Author Gender",
        options = {
            @PropertyOption(name = "Male", value = "1. Male"),
            @PropertyOption(name = "Female", value = "2. Female")
        },
        value = "Female")

    private static final String AUTHOR_GENDER = "author.gender";
    @Property(label = "CheckBox Property " ,boolValue = false,description = "please Check the Property")
    public static final String CHECKBOX_PROPERTY = "checkBox.property";

    @Property(value={"English", "Hindi"}, unbounded = PropertyUnbounded.ARRAY, label = "Subjects", cardinality = 50, description = "Example for Multi field config")
    private static final String MULTI_FIELD = "multifield";


        /**
     * @return Author's name
     */
    @Override
    public String getAuthorName() {
        return this.name;
    }

    /**
     * @return Author's gender
     */
    @Override
    public String getAuthorGender(){
        return this.gender;
    }

    /**
     *
     * @return Author's age
     */
    @Override
    public int getAge() {
        return age;
    }

    /**
     * @param context
     * Activated Method to give the initial values to the variables, when bundle is Activated
     */

    @Override
    public boolean getCheckbox()
    {
        return this.checkbox;
    }
    @Override
    public String[] getMultiString()
    {
        return this.multiString;
    }
    @Activate
    protected void activate(@SuppressWarnings("rawtypes") final Map context) {
        this.name = PropertiesUtil.toString(context.get(AUTHOR_NAME), "");
        this.gender = PropertiesUtil.toString(context.get(AUTHOR_GENDER),"");
        this.checkbox = PropertiesUtil.toBoolean(context.get(CHECKBOX_PROPERTY),true);
        this.multiString = PropertiesUtil.toStringArray(context.get(MULTI_FIELD));
        this.age = PropertiesUtil.toInteger(context.get(AUTHOR_AGE),12);

    }

    /*
     * sets variables to null when deactivating bundle
     */
    @Deactivate
    protected void deactivate() {
        this.name = null;
        this.gender = null;
    }

    /**
     * @param context
     * assigns the values to variables when the values are modified in Felix's console
     */
    @Modified
    protected void modified(ComponentContext context){
        // gets values from context and assigns to instance variables
        this.name = PropertiesUtil.toString(
            context.getProperties().get(AUTHOR_NAME), "");
        this.gender = PropertiesUtil.toString(
            context.getProperties().get(AUTHOR_GENDER), "");
        this.checkbox = PropertiesUtil.toBoolean(
                context.getProperties().get(CHECKBOX_PROPERTY), true);
       this.multiString = PropertiesUtil.toStringArray(context.getProperties().get(MULTI_FIELD));
        this.age = PropertiesUtil.toInteger(
                context.getProperties().get(AUTHOR_AGE),12);
    }
}
