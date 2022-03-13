import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import { DadosPessoais } from "../tabs/personalData";
import { FamilyData } from "../tabs/familyData";
import { Saude } from "../tabs/health";
import { PesquisaSocial } from "../tabs/socialResearch";
import Main from "../../../components/Main";
import TabPanel from "../components/tabPanel";
import { ArrowForward, Check } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  participantActions,
  selectParticipant,
} from "../../../reducers/participantReducer";
import {
  addressActions,
  selectAddress,
} from "../../../reducers/addressReducer";
import { Participant } from "../../../model/Participant";
import { Address } from "../../../model/Address";
import {
  contactActions,
  selectContact,
} from "../../../reducers/contactReducer";
import { Contact } from "../../../model/Contact";
import {
  schoolDataActions,
  selectSchoolData,
} from "../../../reducers/schoolDataReducer";
import { SchoolData } from "../../../model/SchoolData";

const useStyles = makeStyles((theme: Theme) => ({
  tabs: {
    backgroundColor: "lightgrey",
  },
}));

const PartnerForm = (): JSX.Element => {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setCurrentTab(newValue);
  };
  const [currentTab, setCurrentTab] = useState(0);
  const dispatch = useDispatch();
  const participante: Partial<Participant> = useSelector(selectParticipant);
  const endereco: Partial<Address> = useSelector(selectAddress);
  const contato: Partial<Contact> = useSelector(selectContact);
  const dadosEscolares: Partial<SchoolData> = useSelector(selectSchoolData);

  useEffect(() => {
    if (participante?.id) {
      dispatch(addressActions.findById(participante?.id));
      dispatch(contactActions.findById(participante?.id));
      // dispatch(schoolDataActions.findById(participante?.id));
    }
  }, []);

  const next = () => {
    if (currentTab === 0) {
      if (participante?.id) {
        console.log(participante.federado);
        dispatch(
          participantActions.update({
            participant: participante,
            dispatch,
            address: endereco,
            contact: contato,
            schoolData: dadosEscolares,
          })
        );
      } else {
        dispatch(
          participantActions.create({
            participant: participante,
            dispatch,
            address: endereco,
            contact: contato,
            schoolData: dadosEscolares,
          })
        );
      }
    }
    setCurrentTab(currentTab === 3 ? 0 : currentTab + 1);
  };

  const history = useHistory();

  const save = () => {
    history.push("/partnerList");
  };

  function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Main />
      <Tabs
        orientation="horizontal"
        variant="standard"
        value={currentTab}
        aria-label="horizontal tabs"
        className={classes.tabs}
        onChange={handleChange}
      >
        <Tab label="Dados Pessoais" {...a11yProps(0)} />
        <Tab label="Responsável legal e Família" {...a11yProps(3)} />
        <Tab label="Saúde" {...a11yProps(2)} />
        <Tab label="Pesquisa Social" {...a11yProps(1)} />
      </Tabs>
      <div
        style={{
          marginTop: "20%",
        }}
      >
        <Fab
          style={{
            position: "absolute",
            top: 140,
            right: 48,
          }}
          color="primary"
          onClick={() => {
            currentTab !== 3 ? next() : save();
          }}
        >
          {currentTab !== 3 ? (
            <ArrowForward style={{ color: "#fff" }} />
          ) : (
            <Check style={{ color: "#fff" }} />
          )}
        </Fab>
        <TabPanel value={currentTab} index={0}>
          <DadosPessoais />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <FamilyData />
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <Saude />
        </TabPanel>
        <TabPanel value={currentTab} index={3}>
          <PesquisaSocial />
        </TabPanel>
      </div>
    </div>
  );
};

export default PartnerForm;
